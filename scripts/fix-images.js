import fs from 'fs/promises';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'blog');
const ASTRO_DIR = path.join(BLOG_DIR, '_astro');

function decodeHtmlEntities(str) {
  return str
    .replace(/&#x([0-9A-Fa-f]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

function escapeAttr(s) {
  return String(s).replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

async function findAstroAsset(basename) {
  try {
    const files = await fs.readdir(ASTRO_DIR);
    const baseNoExt = path.parse(basename).name;
    for (const f of files) {
      if (f.includes(baseNoExt)) return f;
    }
  } catch (e) {
    // ignore
  }
  return null;
}

async function getHtmlFiles(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...await getHtmlFiles(p));
    } else if (e.isFile() && p.endsWith('.html')) {
      out.push(p);
    }
  }
  return out;
}

async function fixFile(file) {
  let changed = false;
  let content = await fs.readFile(file, 'utf8');
  const regex = /<img\s+__ASTRO_IMAGE_="([^"]+)"\s*>/g;
  content = content.replace(regex, (match, encoded) => {
    try {
      const jsonStr = decodeHtmlEntities(encoded);
      const info = JSON.parse(jsonStr);
      const src = info.src || info["src"];
      const alt = info.alt || '';
      const asset = findAstroAsset(path.basename(src));
      // asset may be a Promise; handle below
      changed = true;
      return `@@REPLACE_TOKEN@@${encoded}@@/REPLACE@@`;
    } catch (e) {
      return match;
    }
  });

  if (!changed) return false;

  // Now resolve tokens and replace with actual asset filenames
  const tokenRegex = /@@REPLACE_TOKEN@@([^@]+)@@\/REPLACE@@/g;
  content = await replaceAsync(content, tokenRegex, async (m, encoded) => {
    const jsonStr = decodeHtmlEntities(encoded);
    const info = JSON.parse(jsonStr);
    const src = info.src || info["src"];
    const alt = info.alt || '';
    const assetName = await findAstroAsset(path.basename(src));
    if (!assetName) return `<img src="${src}" alt="${escapeAttr(alt)}">`;
    return `<img src="/blog/_astro/${assetName}" alt="${escapeAttr(alt)}" loading="lazy">`;
  });

  await fs.writeFile(file, content, 'utf8');
  return true;
}

// helper to support async replace
async function replaceAsync(str, regex, asyncFn) {
  const parts = [];
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(str)) !== null) {
    parts.push(str.slice(lastIndex, match.index));
    parts.push(await asyncFn(...match));
    lastIndex = match.index + match[0].length;
  }
  parts.push(str.slice(lastIndex));
  return parts.join('');
}

async function main() {
  try {
    const htmlFiles = await getHtmlFiles(BLOG_DIR);
    let total = 0;
    for (const f of htmlFiles) {
      const ok = await fixFile(f);
      if (ok) total++;
    }
    console.log(`Patched ${total} HTML file(s).`);
  } catch (e) {
    console.error(e);
    process.exitCode = 1;
  }
}

main();
