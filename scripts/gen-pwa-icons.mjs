import fs from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';

// Generates on-brand PWA icons (no external deps, built-in zlib only).
// Brand: forest-green badge (#183126) with a sand (#D9C6A2) lollipop tree
// and a light ground line (#C8D8D7) — matching public/logo.svg.

const FOREST = [24, 49, 38]; // #183126
const SAND = [217, 198, 162]; // #D9C6A2
const MIST = [200, 216, 215]; // #C8D8D7

function makeCRCTable() {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
}
const CRC_TABLE = makeCRCTable();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  const crcData = Buffer.concat([typeBuf, data]);
  crcBuf.writeUInt32BE(crc32(crcData), 0);
  return Buffer.concat([lenBuf, crcData, crcBuf]);
}

function encodePNG(width, height, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0;
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

function treeColor(x, y, size, maskable) {
  const cx = size / 2;
  const rc = size * (maskable ? 0.17 : 0.205);
  const cyc = size * (maskable ? 0.45 : 0.4);
  const dx = x - cx;
  const dy = y - cyc;
  if (dx * dx + dy * dy <= rc * rc) return SAND;
  const tw = size * 0.052;
  const tTop = cyc + rc * 0.42;
  const tBot = size * (maskable ? 0.67 : 0.71);
  if (Math.abs(x - cx) <= tw / 2 && y >= tTop && y <= tBot) return MIST;
  const gy = size * (maskable ? 0.75 : 0.79);
  const gw = size * 0.34;
  if (Math.abs(y - gy) <= size * 0.014 && Math.abs(x - cx) <= gw / 2) return MIST;
  return null;
}

function colorAt(x, y, size, maskable) {
  const cx = size / 2;
  const cy = size / 2;
  if (!maskable) {
    const dx = x - cx;
    const dy = y - cy;
    const R = size * 0.46;
    if (dx * dx + dy * dy > R * R) return [0, 0, 0, 0];
  }
  const tree = treeColor(x, y, size, maskable);
  return tree || [FOREST[0], FOREST[1], FOREST[2], 255];
}

function render(size, maskable) {
  const SS = 4;
  const rgba = Buffer.alloc(size * size * 4);
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const x = px + (sx + 0.5) / SS;
          const y = py + (sy + 0.5) / SS;
          const c = colorAt(x, y, size, maskable);
          r += c[0];
          g += c[1];
          b += c[2];
          a += c[3];
        }
      }
      const n = SS * SS;
      const i = (py * size + px) * 4;
      rgba[i] = Math.round(r / n);
      rgba[i + 1] = Math.round(g / n);
      rgba[i + 2] = Math.round(b / n);
      rgba[i + 3] = Math.round(a / n);
    }
  }
  return rgba;
}

const outDir = path.resolve('public/icons');
await fs.mkdir(outDir, { recursive: true });

const targets = [
  { file: 'icon-192.png', size: 192, maskable: false },
  { file: 'icon-512.png', size: 512, maskable: false },
  { file: 'icon-512-maskable.png', size: 512, maskable: true }
];

for (const t of targets) {
  const rgba = render(t.size, t.maskable);
  const png = encodePNG(t.size, t.size, rgba);
  await fs.writeFile(path.join(outDir, t.file), png);
  console.log(`تم إنشاء ${t.file} (${png.length} بايت)`);
}
