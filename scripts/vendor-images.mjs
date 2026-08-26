import fs from 'node:fs/promises';
import path from 'node:path';

const assets = [
  {
    key: 'entrance',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/%D9%85%D9%86%D8%AA%D8%B2%D9%87_%D8%BA%D8%A7%D8%A8%D8%A9_%D8%B1%D8%BA%D8%AF%D8%A7%D9%861W9828.jpg',
    file: 'raghdan-entrance.jpg'
  },
  {
    key: 'sign',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Welcome_Sign_-_Raghdan_Forest_1.jpg',
    file: 'raghdan-welcome-sign.jpg'
  },
  {
    key: 'ridge',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Albaha9021_-_1.jpeg',
    file: 'albaha-ridge.jpeg'
  },
  {
    key: 'forest',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Albaha9021_-_2.jpeg',
    file: 'albaha-forest.jpeg'
  },
  {
    key: 'clouds',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/46/%D8%A7%D9%84%D8%A8%D8%A7%D8%AD%D8%A9_-_1.jpeg',
    file: 'albaha-clouds.jpeg'
  }
];

const outDir = path.resolve('public/images');
await fs.mkdir(outDir, { recursive: true });

for (const asset of assets) {
  const response = await fetch(asset.url, { headers: { 'user-agent': 'raghadan-guide-asset-vendor/1.0' } });
  if (!response.ok) throw new Error(`فشل تنزيل ${asset.file}: ${response.status}`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  await fs.writeFile(path.join(outDir, asset.file), bytes);
  console.log(`تم تنزيل ${asset.file} (${bytes.length} بايت)`);
}

const pagePath = path.resolve('src/pages/index.astro');
let page = await fs.readFile(pagePath, 'utf8');
for (const asset of assets) {
  page = page.replace(`'${asset.url}'`, `'/images/${asset.file}'`);
}
await fs.writeFile(pagePath, page);
console.log('تم تحويل مسارات الصور في الصفحة الرئيسية إلى ملفات محلية.');
