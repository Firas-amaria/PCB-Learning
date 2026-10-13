const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/hebrew.js'), 'utf8'), context);
const translations = context.window.HUB_HE;
const literal = String.raw`(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')`;
const keys = new Set();
for (const file of ['lessons', 'projects', 'app', 'project-view']) {
  const source = fs.readFileSync(path.join(root, `assets/${file}.js`), 'utf8');
  for (const match of source.matchAll(new RegExp(`(?=(${literal})\\s*,\\s*(${literal}))`, 'g'))) {
    const en = vm.runInNewContext(match[1]);
    const ar = vm.runInNewContext(match[2]);
    if (/[\u0600-\u06ff]/.test(ar) && !/[\u0600-\u06ff]/.test(en)) keys.add(en);
  }
}
const missing = [...keys].filter(key => !translations[key]);
if (missing.length) throw Error(`Missing Hebrew translations:\n${missing.join('\n')}`);
for (const [key, value] of Object.entries(translations)) {
  if (!/[\u0590-\u05ff]/.test(value) || /[\u0600-\u06ff]/.test(value)) throw Error(`Invalid Hebrew: ${key}`);
  const expected = [...key.matchAll(/\{\w+\}/g)].map(m => m[0]).sort();
  const actual = [...value.matchAll(/\{\w+\}/g)].map(m => m[0]).sort();
  if (JSON.stringify(expected) !== JSON.stringify(actual)) throw Error(`Placeholder mismatch: ${key}`);
}
console.log(`PASS: ${keys.size} source strings have Hebrew translations; placeholders and script checks passed.`);
