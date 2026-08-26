import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const fail = (message) => { throw new Error(message); };
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const pkg = JSON.parse(read('package.json'));
const exact = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/;

for (const group of ['dependencies', 'devDependencies']) {
  for (const [name, version] of Object.entries(pkg[group] || {})) {
    if (!exact.test(version)) fail(`${name} ليس مثبتاً على إصدار دقيق: ${version}`);
  }
}
if (pkg.packageManager !== 'pnpm@11.23.0') fail('packageManager غير مطابق للإصدار المقصود');
if (pkg.engines?.node !== read('.node-version').trim()) fail('إصدار Node لا يطابق .node-version');
if (fs.existsSync(path.join(root, 'pnpm-workspace.yaml'))) fail('مشروع الحزمة الواحدة لا يحتاج pnpm-workspace.yaml');

const sourceFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(astro|ts|css|json|jsonc|svg|txt|md|yaml)$/.test(entry.name)) sourceFiles.push(p);
  }
}
for (const dir of ['src', 'public']) walk(path.join(root, dir));
sourceFiles.push(path.join(root, 'astro.config.ts'), path.join(root, 'wrangler.jsonc'), path.join(root, 'package.json'), path.join(root, 'pnpm-lock.yaml'));
const all = sourceFiles.map((p) => fs.readFileSync(p, 'utf8')).join('\n');

for (const bad of ['https://' + 'example' + '.com', 'http://' + 'example' + '.com', 'local' + 'host', 'chrome-' + 'extension://']) {
  if (all.includes(bad)) fail(`تم العثور على قيمة محظورة: ${bad}`);
}
if (!read('src/pages/index.astro').includes('!1sar!2ssa')) fail('لغة الخريطة المضمنة ليست عربية/سعودية');
if (!read('src/pages/index.astro').includes("'@type': 'FAQPage'")) fail('FAQPage JSON-LD مفقود');
if (!read('src/pages/index.astro').includes("'TouristAttraction'")) fail('TouristAttraction JSON-LD مفقود');
for (const p of ['src/pages/privacy.astro','src/pages/terms.astro','src/pages/cookies.astro']) {
  if (!fs.existsSync(path.join(root,p))) fail(`صفحة مطلوبة مفقودة: ${p}`);
}
const config = read('astro.config.ts');
if (!config.includes('site,') || !config.includes('site ? [sitemap()] : []')) fail('منطق site/sitemap غير مطابق');
if (/https?:\/\/[A-Za-z0-9.-]+\.(com|net|org|sa)\/?['"]/.test(config)) fail('تم تثبيت نطاق داخل astro.config.ts بدلاً من SITE_URL');

console.log('Source audit: PASS');
console.log(`Files scanned: ${sourceFiles.length}`);
