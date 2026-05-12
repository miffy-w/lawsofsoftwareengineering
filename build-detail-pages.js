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
<meta property="og:title" content="${esc(title)} — 软件工程法则">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="article">
<meta property="og:url" content="https://lawsofsoftwareengineering.vaste.top/laws/${esc(law.slug)}/">
${law.image ? '<meta property="og:image" content="https://lawsofsoftwareengineering.com' + esc(law.image) + '">' : ''}
<meta name="twitter:card" content="summary_large_image">
<title>${esc(title)} — 软件工程法则</title>
	<link rel="icon" type="image/x-icon" href="/favicon.ico">
<script>
(function(){var t;try{t=localStorage.getItem('theme');}catch(e){}
if(!t)t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';
document.documentElement.setAttribute('data-theme',t);})();
</script>
<link rel="stylesheet" href="/laws/style.css">
</head>
<body>
<div class="container">
  <nav style="display:flex;justify-content:space-between;align-items:center">
    <a href="/index.html">&larr; 返回列表</a>
    <button class="theme-toggle" id="theme-toggle" aria-label="切换主题" title="切换明暗主题"><svg id="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg><svg id="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg><span id="theme-label">暗色</span></button>
  </nav>
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
    <section><h2>概述</h2>${law.image ? '<img src="https://lawsofsoftwareengineering.com' + esc(law.image) + '" alt="' + esc(title) + '" loading="lazy" />' : ''}<p>${esc(overview)}</p></section>
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
<script>
(function(){
  var toggle=document.getElementById('theme-toggle');
  var sunIcon=document.getElementById('sun-icon');
  var moonIcon=document.getElementById('moon-icon');
  var label=document.getElementById('theme-label');
  var html=document.documentElement;

  function updateUI(theme){
    var isDark=theme==='dark';
    sunIcon.style.display=isDark?'none':'';
    moonIcon.style.display=isDark?'':'none';
    label.textContent=isDark?'亮色':'暗色';
  }
  updateUI(html.getAttribute('data-theme'));

  toggle.addEventListener('click',function(){
    var next=html.getAttribute('data-theme')==='dark'?'light':'dark';
    html.setAttribute('data-theme',next);
    updateUI(next);
    try{localStorage.setItem('theme',next);}catch(e){}
  });
  window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',function(e){
    var s;try{s=localStorage.getItem('theme');}catch(ex){}
    if(!s){var t=e.matches?'dark':'light';html.setAttribute('data-theme',t);updateUI(t);}
  });
})();
</script>
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
