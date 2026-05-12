// Build individual detail pages for each law
// Reads translations.json + api.json → generates laws/<slug>/index.html
const fs = require('fs');
const path = require('path');

const api = JSON.parse(fs.readFileSync('api.json', 'utf8'));
const T = JSON.parse(fs.readFileSync('translations.json', 'utf8'));

const GROUP_ZH = {"Teams":"团队","Planning":"规划","Architecture":"架构","Quality":"质量","Scale":"规模","Design":"设计","Decisions":"决策"};
const LEVEL_ZH = {"junior":"初级","mid":"中级","senior":"高级"};

function esc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function buildLaw(law, allLaws) {
  const t = T[law.slug];
  const title = (t && t.title) || law.title;
  const desc = (t && t.desc) || law.description;
  const overview = (t && t.overview) || law.overview;
  const examples = (t && t.examples) || law.examples;
  const origins = (t && t.origins) || law.origins;
  const takeaways = (t && t.takeaways) || law.takeaways;
  const lvl = LEVEL_ZH[law.experience] || law.experience;
  const lvlClass = law.experience === 'senior' ? 'senior' : (law.experience === 'mid' ? 'mid' : '');
  const grp = GROUP_ZH[law.group] || law.group;

  // Related laws
  let relatedHtml = '';
  if (law.related && law.related.length > 0) {
    const cards = law.related.map(slug => {
      const r = allLaws.find(l => l.slug === slug);
      if (!r) return '';
      const rt = T[r.slug];
      const rTitle = (rt && rt.title) || r.title;
      const rGrp = GROUP_ZH[r.group] || r.group;
      return `<a class="related-card" href="/laws/${r.slug}/"><strong>${esc(rTitle)}</strong><span>${esc(rGrp)}</span></a>`;
    }).filter(Boolean).join('');
    if (cards) relatedHtml = `<section><h2>相关法则</h2><div class="related-grid">${cards}</div></section>`;
  }

  // Further reading
  let readingHtml = '';
  if (law.further_reading && law.further_reading.length > 0) {
    const items = law.further_reading.map((fr, j) => {
      const frDesc = (t && t.readingDesc && t.readingDesc[j]) ? t.readingDesc[j] : fr.description;
      return `<div class="reading-item"><a href="${esc(fr.url)}" target="_blank" rel="noopener">${esc(fr.title)}</a> <span>&mdash; ${esc(frDesc)}</span></div>`;
    }).join('');
    readingHtml = `<section><h2>参考阅读</h2>${items}</section>`;
  }

  // Takeaways
  let takeawaysHtml = '';
  if (takeaways && takeaways.length > 0) {
    takeawaysHtml = `<section><h2>要点总结</h2><ul>${takeaways.map(t => '<li>' + esc(t) + '</li>').join('')}</ul></section>`;
  }

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="${esc(title)}: ${esc(desc)}">
<title>${esc(title)} — 软件工程法则</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Segoe UI", sans-serif;
    background: #f8f9fa; color: #1a1a2e; line-height: 1.7;
  }
  .container { max-width: 800px; margin: 0 auto; padding: 0 20px; }
  nav { padding: 24px 0; }
  nav a { color: #2563eb; text-decoration: none; font-size: 0.925rem; font-weight: 500; }
  nav a:hover { text-decoration: underline; }
  .article-header { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 32px; margin-bottom: 24px; }
  .article-header h1 { font-size: 1.75rem; font-weight: 800; color: #111827; margin-bottom: 4px; }
  .article-header .title-en { font-size: 1rem; color: #9ca3af; margin-bottom: 16px; }
  .article-header blockquote {
    border-left: 4px solid #2563eb; padding: 12px 20px; margin-top: 16px;
    background: #f0f4ff; border-radius: 0 8px 8px 0; font-size: 1.05rem;
    font-weight: 500; color: #1e40af; font-style: italic;
  }
  .tags-row { display: flex; gap: 8px; flex-wrap: wrap; }
  .tag { display: inline-block; padding: 3px 12px; border-radius: 9999px; font-size: 0.8rem; font-weight: 600; }
  .tag-group { background: #eff6ff; color: #2563eb; }
  .tag-level { background: #f0fdf4; color: #16a34a; }
  .tag-level.mid { background: #fefce8; color: #ca8a04; }
  .tag-level.senior { background: #fef2f2; color: #dc2626; }
  section { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 28px 32px; margin-bottom: 20px; }
  section h2 { font-size: 1.2rem; font-weight: 700; color: #111827; margin-bottom: 14px; padding-bottom: 8px; border-bottom: 2px solid #f3f4f6; }
  section p { margin-bottom: 12px; color: #374151; }
  section p:last-child { margin-bottom: 0; }
  section ul { padding-left: 20px; }
  section li { margin-bottom: 8px; color: #374151; }
  section li:last-child { margin-bottom: 0; }
  section img { max-width: 100%; border-radius: 8px; margin: 12px 0; }
  .reading-item { margin-bottom: 10px; }
  .reading-item a { color: #2563eb; text-decoration: none; font-weight: 500; }
  .reading-item a:hover { text-decoration: underline; }
  .reading-item span { color: #6b7280; font-size: 0.9rem; }
  .related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
  .related-card {
    display: block; padding: 14px 16px; border: 1px solid #e5e7eb; border-radius: 8px;
    text-decoration: none; color: inherit; transition: all 0.15s ease;
  }
  .related-card:hover { border-color: #2563eb; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
  .related-card strong { display: block; font-size: 0.925rem; color: #111827; margin-bottom: 2px; }
  .related-card span { font-size: 0.8rem; color: #6b7280; }
  footer { text-align: center; padding: 32px 20px; font-size: 0.85rem; color: #9ca3af; }
  footer a { color: #2563eb; text-decoration: none; }
  footer a:hover { text-decoration: underline; }
  @media (max-width: 640px) {
    .article-header { padding: 20px; }
    .article-header h1 { font-size: 1.4rem; }
    section { padding: 20px; }
    .related-grid { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>
<div class="container">
  <nav><a href="/index.html">&larr; 返回列表</a></nav>
  <article>
    <div class="article-header">
      <h1>${esc(title)}</h1>
      <div class="title-en">${esc(law.title)}</div>
      <div class="tags-row">
        <span class="tag tag-group">${esc(grp)}</span>
        <span class="tag tag-level${lvlClass ? ' ' + lvlClass : ''}">${esc(lvl)}</span>
      </div>
      <blockquote>${esc(desc)}</blockquote>
    </div>
    ${takeawaysHtml}
    <section><h2>概述</h2>${law.image ? '<img src="' + esc(law.image) + '" alt="' + esc(title) + '" loading="lazy" />' : ''}<p>${esc(overview)}</p></section>
    <section><h2>案例</h2><p>${esc(examples)}</p></section>
    <section><h2>起源</h2><p>${esc(origins)}</p></section>
    ${readingHtml}
    ${relatedHtml}
  </article>
  <footer>
    <p>&copy; 2026 <a href="https://lawsofsoftwareengineering.com/" target="_blank" rel="noopener">Dr. Milan Milanovi&cacute;</a></p>
    <p>中文翻译 &middot; 内容基于 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener">CC BY-NC-ND 4.0</a> 许可</p>
  </footer>
</div>
</body>
</html>
`;
}

const lawsDir = path.join(__dirname, 'laws');
let count = 0;

api.laws.forEach(law => {
  const slugDir = path.join(lawsDir, law.slug);
  fs.mkdirSync(slugDir, { recursive: true });
  const html = buildLaw(law, api.laws);
  fs.writeFileSync(path.join(slugDir, 'index.html'), html, 'utf8');
  count++;
});

console.log(`Generated ${count} detail pages under laws/*/index.html`);
