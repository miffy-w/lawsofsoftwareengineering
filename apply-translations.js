// Apply translations to generate laws-zh.js
const fs = require('fs');
const api = JSON.parse(fs.readFileSync('api.json', 'utf8'));
const T = JSON.parse(fs.readFileSync('translations.json', 'utf8'));

const laws = api.laws.map((law, i) => {
  const t = T[law.slug];
  if (!t) { console.warn('Missing translation:', law.slug); }
  return {
    title: (t && t.title) ? t.title : law.title,
    titleEn: law.title,
    slug: law.slug,
    description: (t && t.desc) ? t.desc : law.description,
    descriptionEn: law.description,
    experience: law.experience,
    group: law.group,
    image: law.image,
    overview: (t && t.overview) ? t.overview : law.overview,
    examples: (t && t.examples) ? t.examples : law.examples,
    origins: (t && t.origins) ? t.origins : law.origins,
    takeaways: (t && t.takeaways) ? t.takeaways : law.takeaways,
    related: law.related,
    further_reading: law.further_reading.map((fr, j) => ({
      title: fr.title,
      url: fr.url,
      description: (t && t.readingDesc && t.readingDesc[j]) ? t.readingDesc[j] : fr.description
    }))
  };
});

const translated = Object.keys(T).length;
const total = laws.length;
const untranslated = total - translated;

const output = `// 软件工程法则 — 中文数据
// 数据来源: https://lawsofsoftwareengineering.com/api.json
// 翻译进度: ${translated}/${total} 条已翻译
// 内容基于 CC BY-NC-ND 4.0 许可

const GROUP_MAP = {"Teams":"团队","Planning":"规划","Architecture":"架构","Quality":"质量","Scale":"规模","Design":"设计","Decisions":"决策"};
const LEVEL_MAP = {"junior":"初级","mid":"中级","senior":"高级"};

const LAWS = ${JSON.stringify(laws, null, 2)};
`;

fs.writeFileSync('laws-zh.js', output, 'utf8');
console.log(`Generated laws-zh.js: ${translated}/${total} translated, ${untranslated} remaining`);
console.log('File size:', (fs.statSync('laws-zh.js').size / 1024).toFixed(1), 'KB');
