import fs from 'node:fs';import assert from 'node:assert/strict';import crypto from 'node:crypto';
const read=file=>fs.readFileSync(file,'utf8'),pkg=JSON.parse(read('package.json'));
for(const dependencies of [pkg.dependencies,pkg.devDependencies])for(const version of Object.values(dependencies))assert.match(version,/^\d+\.\d+\.\d+$/);
assert.equal(pkg.packageManager,'pnpm@11.23.0');assert.equal(pkg.engines.node,read('.node-version').trim());
assert(!read('.npmrc').includes('enforce-build-approval=false'));assert.match(read('pnpm-workspace.yaml'),/esbuild: true/);assert.match(read('pnpm-workspace.yaml'),/workerd: true/);
assert.match(read('astro.config.ts'),/https:\/\/raghadanforest.com/);
const records=JSON.parse(read('src/data/photos.json'));
for(const photo of records){assert.equal(crypto.createHash('sha256').update(fs.readFileSync('public'+photo.local)).digest('hex'),photo.localSHA256);assert.match(photo.source,/^https:\/\/commons.wikimedia.org\/wiki\/File:/);assert.match(photo.licenseURL,/^https:\/\/creativecommons.org\//);}
for(const prefix of ['', 'en/'])for(const name of ['index','guide','tickets','location','privacy','terms','cookies'])assert(fs.existsSync('src/pages/'+prefix+name+'.astro'));
assert(!read('src/data/guide.ts').includes('aggregateRating'));assert(!read('src/data/guide.ts').includes('openingHoursSpecification'));
console.log('PASS: pinned dependencies/native build allowlist, production origin, all 14 existing routes, photo hashes and per-file licence links, no recurring hours or third-party rating schema.');
