# 软件工程法则中文站 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 lawsofsoftwareengineering.com 翻译为中文纯静态站点，保留 56 条法则的列表筛选和独立详情页功能。

**Architecture:** 纯静态多页面 — 1 个首页 `index.html` + 1 个共享数据文件 `laws-zh.js` + 1 个详情模板 `laws/detail.html`。通过 Cloudflare `_redirects` 将 `/laws/*` 的所有请求指向同一个 `detail.html`，该文件根据 URL 中的 slug 动态渲染对应法则内容。零依赖，零构建步骤。

**Tech Stack:** HTML5 + CSS3 + Vanilla JS (ES6)，Cloudflare Pages 部署

---

## 文件结构

```
/
├── index.html              # 首页（列表 + 筛选）
├── laws-zh.js              # 56 条法则完整中文数据
├── laws/
│   └── detail.html         # 详情页模板（_redirects 将所有 /laws/* 指向它）
├── _redirects              # Cloudflare Pages 路由
└── _headers                # 安全头
```

---

### Task 1: 创建 laws-zh.js 数据文件

**Files:**
- Create: `laws-zh.js`

- [ ] **Step 1: 创建文件框架，包含分类/级别映射和完整 56 条翻译数据**

将以下内容写入 `laws-zh.js`：

```js
// 软件工程法则 — 中文数据
// 数据来源: https://lawsofsoftwareengineering.com/api.json
// 翻译遵循: 人名保留英文, 术语使用通行中文译法

const GROUP_MAP = {
  "Teams": "团队",
  "Planning": "规划",
  "Architecture": "架构",
  "Quality": "质量",
  "Scale": "规模",
  "Design": "设计",
  "Decisions": "决策"
};

const LEVEL_MAP = {
  "junior": "初级",
  "mid": "中级",
  "senior": "高级"
};

const LAWS = [
  {
    "title": "康威定律",
    "titleEn": "Conway's Law",
    "slug": "conways-law",
    "description": "组织设计的系统会镜像其自身的沟通结构。",
    "descriptionEn": "Organizations design systems that mirror their own communication structure.",
    "experience": "senior",
    "group": "Teams",
    "image": "/images/laws/conways-law.png",
    "overview": "康威定律指出，软件系统会反映构建它的组织的沟通结构。一家将前端、后端和数据库部门分开的公司，极有可能产出一个三层架构的系统。小型分布式团队倾向于产生模块化的服务架构，而大型集中式团队则倾向于构建单体系统。为了缓解这一问题，团队可以采用「逆康威策略」：有意识地按照期望的软件架构来调整组织结构。",
    "examples": "某家公司拥有独立的前端、后端和数据库部门。他们构建的软件呈现三层架构，每一层由各自部门独立设计。由于团队之间目标不一致，层级之间的集成非常痛苦。亚马逊以组织「双披萨团队」而闻名，每个团队负责一个特定的服务。康威定律表明，这正是亚马逊采用面向服务架构的原因，各服务之间有清晰的 API 契约。",
    "origins": "梅尔文·康威（Melvin Conway）在 1967 年的论文《委员会如何发明？》中提出了这一想法。《哈佛商业评论》因缺乏形式化证明而拒绝发表，随后《Datamation》于 1968 年发表了该论文。弗雷德·布鲁克斯（Fred Brooks）后来在《人月神话》中将其命名为「康威定律」，使其成为软件工程领域的基础概念。",
    "takeaways": [
      "软件系统的架构通常反映公司的组织架构或团队结构。",
      "如果公司以孤岛方式组织，就可能产出沟通不畅的孤岛式软件模块。",
      "要实现期望的软件架构（如微服务），可能需要先重组团队，因为团队会按照其沟通路径来构建软件。",
      "在项目启动时，要意识到团队的划分方式很可能会导致软件边界出现在同样的位置。"
    ],
    "related": ["brooks-law", "galls-law", "law-of-leaky-abstractions", "hyrums-law"],
    "further_reading": [
      { "title": "How Do Committees Invent?", "url": "https://www.melconway.com/Home/Committees_Paper.html", "description": "梅尔文·康威 1968 年的原始论文" },
      { "title": "Conway's Law", "url": "https://martinfowler.com/bliki/ConwaysLaw.html", "description": "马丁·福勒（Martin Fowler）对康威定律的解读" },
      { "title": "Spotify Engineering Culture", "url": "https://engineering.atspotify.com/2014/3/spotify-engineering-culture-part-1", "description": "Spotify 工程文化原始博客文章" },
      { "title": "Team Topologies", "url": "https://amzn.to/4jgRZ6V", "description": "康威定律在现代组织设计中的应用" }
    ]
  },
  {
    "title": "过早优化（克努斯优化原则）",
    "titleEn": "Premature Optimization (Knuth's Optimization Principle)",
    "slug": "premature-optimization",
    "description": "过早优化是万恶之源。",
    "descriptionEn": "Premature optimization is the root of all evil.",
    "experience": "junior",
    "group": "Planning",
    "image": "/images/laws/premature-optimization.png",
    "overview": "克努斯优化原则揭示了一个根本性的权衡：性能改进往往会增加复杂性。在尚未理解性能瓶颈真正所在之前就进行这种权衡，会导致代码难以阅读和维护。在开发早期，应专注于清晰的设计。如果过早优化，可能会引入 bug 或降低代码灵活性，而这一切只是为了加速那些可能根本不是瓶颈的代码部分。通常认为 20% 的代码消耗 80% 的执行时间。该原则建议先编写简洁的代码，然后通过性能分析找出真正需要优化的部分。",
    "examples": "一位开发者用 C 语言编写了一个底层例程，花费两天时间用复杂的位操作来提升速度，结果发现这个函数只在启动时调用一次，仅占运行时间的 0.001%。精力白白浪费，代码还变得更难理解。相反，遵循克努特的建议：先用简洁的方式实现，然后测量，发现 80% 的时间都花在某个循环上，再针对那个循环进行优化或使用更好的算法。",
    "origins": "唐纳德·克努斯（Donald Knuth）在 1974 年发表于《ACM Computing Surveys》的论文《带 goto 语句的结构化编程》中提出了这一观点。完整的引用提供了重要的上下文：「在约 97% 的情况下，我们应该忽略微小的效率问题：过早优化是万恶之源。但我们不应错过那关键的 3% 的机会。」这句话逐渐成为软件工程中近乎谚语般的存在。",
    "takeaways": [
      "大多数代码并不在性能关键的热点路径上，执着于处处进行微优化会浪费时间，并使代码更难阅读和维护。",
      "根据克努斯的说法，在约 97% 的情况下，我们应该忽略微小的效率问题，专注于清晰的设计和正确的功能。",
      "优化后的代码通常更复杂或更难以理解。如果在不必要的时候过早进行优化，就会白费这些代价。",
      "先让它正确工作，再让它快起来，最后让它漂亮起来。"
    ],
    "related": ["yagni", "hofstadters-law", "galls-law", "kernighans-law", "amdahls-law"],
    "further_reading": [
      { "title": "Structured Programming with go to Statements", "url": "https://pic.plover.com/knuth-GOTO.pdf", "description": "唐纳德·克努斯 1974 年的原始论文" },
      { "title": "Code Complete", "url": "https://amzn.to/4b6YVBx", "description": "史蒂夫·麦康奈尔（Steve McConnell）的软件构建综合指南" },
      { "title": "Program Optimization - Wikipedia", "url": "https://en.wikipedia.org/wiki/Program_optimization", "description": "优化技术及其应用时机概览" }
    ]
  }
  // 第 3-56 条法则将在后续步骤中逐个添加，每条遵循完全相同的字段结构
];
```

- [ ] **Step 2: 添加第 3-16 条法则（Hyrum's Law 至 Price's Law）**

从 `api.json` 中读取对应数据，翻译所有字段，追加到 `LAWS` 数组。

翻译时的中文名称对照：

| # | 英文名 | 中文名 |
|---|--------|--------|
| 3 | Hyrum's Law | 海勒姆定律 |
| 4 | The Boy Scout Rule | 童子军规则 |
| 5 | YAGNI | YAGNI（你不会需要它） |
| 6 | Brooks's Law | 布鲁克斯定律 |
| 7 | Gall's Law | 加尔定律 |
| 8 | The Law of Leaky Abstractions | 抽象漏洞法则 |
| 9 | Tesler's Law | 泰斯勒定律（复杂度守恒） |
| 10 | CAP Theorem | CAP 定理 |
| 11 | Second-System Effect | 第二系统效应 |
| 12 | Fallacies of Distributed Computing | 分布式计算谬误 |
| 13 | Law of Unintended Consequences | 意外后果法则 |
| 14 | Zawinski's Law | 扎温斯基定律 |
| 15 | Dunbar's Number | 邓巴数 |
| 16 | The Ringelmann Effect | 林格尔曼效应 |

每条法则的翻译内容从 `api.json` 对应条目中提取 `overview`、`examples`、`origins`、`takeaways` 字段并翻译为中文。`further_reading` 的 `description` 翻译为中文，保留原始 `title` 和 `url`。

- [ ] **Step 3: 添加第 17-28 条法则（Price's Law 至 Postel's Law）**

| # | 英文名 | 中文名 |
|---|--------|--------|
| 17 | Price's Law | 普莱斯定律 |
| 18 | Putt's Law | 普特定律 |
| 19 | Peter Principle | 彼得原理 |
| 20 | Bus Factor | 巴士因子 |
| 21 | Dilbert Principle | 呆伯特原则 |
| 22 | Parkinson's Law | 帕金森定律 |
| 23 | The Ninety-Ninety Rule | 九九九规则 |
| 24 | Hofstadter's Law | 侯世达定律 |
| 25 | Goodhart's Law | 古德哈特定律 |
| 26 | Gilb's Law | 吉尔布定律 |
| 27 | Murphy's Law / Sod's Law | 墨菲定律 |
| 28 | Postel's Law | 波斯特尔定律 |

- [ ] **Step 4: 添加第 29-40 条法则（Broken Windows Theory 至 DRY）**

| # | 英文名 | 中文名 |
|---|--------|--------|
| 29 | Broken Windows Theory | 破窗理论 |
| 30 | Technical Debt | 技术债务 |
| 31 | Linus's Law | 林纳斯定律 |
| 32 | Kernighan's Law | 克尼汉定律 |
| 33 | Testing Pyramid | 测试金字塔 |
| 34 | Pesticide Paradox | 杀虫剂悖论 |
| 35 | Lehman's Laws of Software Evolution | 莱曼软件演化定律 |
| 36 | Sturgeon's Law | 斯特金定律 |
| 37 | Amdahl's Law | 阿姆达尔定律 |
| 38 | Gustafson's Law | 古斯塔夫森定律 |
| 39 | Metcalfe's Law | 梅特卡夫定律 |
| 40 | DRY | DRY（不要重复自己） |

- [ ] **Step 5: 添加第 41-56 条法则（KISS 至 Cunningham's Law）**

| # | 英文名 | 中文名 |
|---|--------|--------|
| 41 | KISS | KISS（保持简单） |
| 42 | SOLID Principles | SOLID 原则 |
| 43 | Law of Demeter | 迪米特法则 |
| 44 | Principle of Least Astonishment | 最小惊讶原则 |
| 45 | Dunning-Kruger Effect | 邓宁-克鲁格效应 |
| 46 | Hanlon's Razor | 汉隆剃刀 |
| 47 | Occam's Razor | 奥卡姆剃刀 |
| 48 | Sunk Cost Fallacy | 沉没成本谬误 |
| 49 | The Map Is Not the Territory | 地图不等于疆域 |
| 50 | Confirmation Bias | 确认偏误 |
| 51 | The Hype Cycle & Amara's Law | 炒作周期与阿马拉定律 |
| 52 | The Lindy Effect | 林迪效应 |
| 53 | First Principles Thinking | 第一性原理思维 |
| 54 | Inversion | 逆向思维 |
| 55 | Pareto Principle (80/20 Rule) | 帕累托原则（二八法则） |
| 56 | Cunningham's Law | 坎宁安定律 |

- [ ] **Step 6: 验证数据完整性**

```bash
node -e "const LAWS=require('./laws-zh.js'); console.log('Total:', LAWS.length)"
```

预期输出: `Total: 56`

---

### Task 2: 创建首页 index.html

**Files:**
- Create: `index.html`

- [ ] **Step 1: 创建 HTML 结构和 CSS 样式**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="软件工程法则 — 塑造软件系统、团队和决策的原则与模式。56 条经典软件工程法则的中文翻译。">
<title>软件工程法则</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Segoe UI", sans-serif;
    background: #f8f9fa;
    color: #1a1a2e;
    line-height: 1.6;
  }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

  /* Header */
  header { background: #fff; border-bottom: 1px solid #e5e7eb; padding: 40px 0 32px; text-align: center; }
  header h1 { font-size: 2.25rem; font-weight: 800; color: #111827; margin-bottom: 8px; }
  header p { font-size: 1.1rem; color: #6b7280; }

  /* Filters */
  .filters { padding: 24px 0 20px; display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; align-items: center; }
  .filter-group { display: flex; flex-wrap: wrap; gap: 6px; }
  .filter-label { font-size: 0.8rem; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-right: 4px; align-self: center; }
  .filter-btn {
    padding: 6px 16px; border: 1px solid #d1d5db; border-radius: 9999px;
    background: #fff; color: #374151; font-size: 0.875rem; cursor: pointer;
    transition: all 0.15s ease; font-family: inherit; white-space: nowrap;
  }
  .filter-btn:hover { border-color: #2563eb; color: #2563eb; }
  .filter-btn.active { background: #2563eb; color: #fff; border-color: #2563eb; }
  .filter-divider { width: 1px; height: 24px; background: #d1d5db; margin: 0 8px; }

  /* Cards Grid */
  .cards-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 20px; padding: 0 0 60px; }
  .card {
    background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 24px;
    cursor: pointer; transition: all 0.2s ease; display: block; text-decoration: none; color: inherit;
  }
  .card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-color: #2563eb; transform: translateY(-2px); }
  .card-title { font-size: 1.15rem; font-weight: 700; color: #111827; margin-bottom: 4px; }
  .card-title-en { font-size: 0.8rem; color: #9ca3af; font-weight: 400; margin-bottom: 10px; }
  .card-desc { font-size: 0.925rem; color: #4b5563; line-height: 1.55; margin-bottom: 14px; }
  .card-tags { display: flex; gap: 6px; flex-wrap: wrap; }
  .tag {
    display: inline-block; padding: 2px 10px; border-radius: 9999px;
    font-size: 0.75rem; font-weight: 600;
  }
  .tag-group { background: #eff6ff; color: #2563eb; }
  .tag-level { background: #f0fdf4; color: #16a34a; }
  .tag-level.mid { background: #fefce8; color: #ca8a04; }
  .tag-level.senior { background: #fef2f2; color: #dc2626; }

  /* Empty state */
  .empty-state { text-align: center; padding: 60px 20px; color: #9ca3af; display: none; }
  .empty-state.show { display: block; }

  /* Footer */
  footer { text-align: center; padding: 32px 20px; border-top: 1px solid #e5e7eb; font-size: 0.85rem; color: #9ca3af; }
  footer a { color: #2563eb; text-decoration: none; }
  footer a:hover { text-decoration: underline; }
  footer .cc-badge { display: inline-flex; align-items: center; gap: 4px; margin-top: 4px; }

  @media (max-width: 768px) {
    header h1 { font-size: 1.75rem; }
    .cards-grid { grid-template-columns: 1fr; }
    .filter-divider { display: none; }
  }
</style>
</head>
<body>
<header>
  <div class="container">
    <h1>软件工程法则</h1>
    <p>塑造软件系统、团队和决策的原则与模式 — 共 56 条</p>
  </div>
</header>

<div class="container">
  <div class="filters">
    <span class="filter-label">级别</span>
    <div class="filter-group" id="level-filters">
      <button class="filter-btn active" data-level="all">全部</button>
      <button class="filter-btn" data-level="junior">初级</button>
      <button class="filter-btn" data-level="mid">中级</button>
      <button class="filter-btn" data-level="senior">高级</button>
    </div>
    <span class="filter-divider"></span>
    <span class="filter-label">类别</span>
    <div class="filter-group" id="group-filters">
      <button class="filter-btn active" data-group="all">全部</button>
    </div>
  </div>

  <div class="cards-grid" id="cards-container"></div>
  <div class="empty-state" id="empty-state">当前筛选条件下没有匹配的法则，请尝试调整筛选条件。</div>
</div>

<footer>
  <div class="container">
    <p>© 2026 <a href="https://lawsofsoftwareengineering.com/" target="_blank" rel="noopener">Dr. Milan Milanović</a></p>
    <p>中文翻译 · 内容基于 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener">CC BY-NC-ND 4.0</a> 许可</p>
  </div>
</footer>

<script src="laws-zh.js"></script>
<script>
// 构建类别筛选按钮
(function() {
  var groups = [...new Set(LAWS.map(function(l) { return l.group; }))];
  var container = document.getElementById('group-filters');
  groups.forEach(function(g) {
    var btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.group = g;
    btn.textContent = GROUP_MAP[g] || g;
    container.appendChild(btn);
  });
})();

// 渲染卡片
function renderCards(filtered) {
  var container = document.getElementById('cards-container');
  var empty = document.getElementById('empty-state');
  container.innerHTML = '';
  if (filtered.length === 0) {
    empty.classList.add('show');
    return;
  }
  empty.classList.remove('show');
  filtered.forEach(function(law) {
    var levelClass = law.experience === 'senior' ? 'senior' : (law.experience === 'mid' ? 'mid' : '');
    var html =
      '<a class="card" href="laws/' + law.slug + '/">' +
        '<div class="card-title">' + law.title + '</div>' +
        '<div class="card-title-en">' + law.titleEn + '</div>' +
        '<div class="card-desc">' + law.description + '</div>' +
        '<div class="card-tags">' +
          '<span class="tag tag-group">' + (GROUP_MAP[law.group] || law.group) + '</span>' +
          '<span class="tag tag-level' + (levelClass ? ' ' + levelClass : '') + '">' + (LEVEL_MAP[law.experience] || law.experience) + '</span>' +
        '</div>' +
      '</a>';
    container.insertAdjacentHTML('beforeend', html);
  });
}

// 筛选逻辑
var activeLevel = 'all';
var activeGroup = 'all';

function filterLaws() {
  var result = LAWS;
  if (activeLevel !== 'all') result = result.filter(function(l) { return l.experience === activeLevel; });
  if (activeGroup !== 'all') result = result.filter(function(l) { return l.group === activeGroup; });
  renderCards(result);
}

// 绑定筛选事件
function setupFilter(containerId, key) {
  document.getElementById(containerId).addEventListener('click', function(e) {
    if (!e.target.classList.contains('filter-btn')) return;
    this.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
    e.target.classList.add('active');
    if (key === 'level') activeLevel = e.target.dataset.level;
    else activeGroup = e.target.dataset.group;
    filterLaws();
  });
}
setupFilter('level-filters', 'level');
setupFilter('group-filters', 'group');

// 初始渲染
renderCards(LAWS);
</script>
</body>
</html>
```

- [ ] **Step 2: 在浏览器打开 index.html 验证列表页**

在浏览器中打开 `index.html`，确认：
- 56 张卡片全部显示
- 点击筛选按钮卡片数量正确变化
- 响应式布局正常（缩小浏览器窗口测试）
- 点击卡片能跳转到 `laws/<slug>/`（此时会 404，下一步修复）

---

### Task 3: 创建详情页模板 laws/detail.html

**Files:**
- Create: `laws/detail.html`

- [ ] **Step 1: 创建详情页模板**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="软件工程法则详情">
<title>软件工程法则</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Segoe UI", sans-serif;
    background: #f8f9fa; color: #1a1a2e; line-height: 1.7;
  }
  .container { max-width: 800px; margin: 0 auto; padding: 0 20px; }

  /* Navigation */
  nav { padding: 24px 0; }
  nav a { color: #2563eb; text-decoration: none; font-size: 0.925rem; font-weight: 500; }
  nav a:hover { text-decoration: underline; }

  /* Article header */
  .article-header { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 32px; margin-bottom: 24px; }
  .article-header h1 { font-size: 1.75rem; font-weight: 800; color: #111827; margin-bottom: 4px; }
  .article-header .title-en { font-size: 1rem; color: #9ca3af; margin-bottom: 16px; }
  .article-header blockquote {
    border-left: 4px solid #2563eb; padding: 12px 20px; margin-top: 16px;
    background: #f0f4ff; border-radius: 0 8px 8px 0; font-size: 1.05rem;
    font-weight: 500; color: #1e40af; font-style: italic;
  }
  .tags-row { display: flex; gap: 8px; flex-wrap: wrap; }
  .tag {
    display: inline-block; padding: 3px 12px; border-radius: 9999px;
    font-size: 0.8rem; font-weight: 600;
  }
  .tag-group { background: #eff6ff; color: #2563eb; }
  .tag-level { background: #f0fdf4; color: #16a34a; }
  .tag-level.mid { background: #fefce8; color: #ca8a04; }
  .tag-level.senior { background: #fef2f2; color: #dc2626; }

  /* Content sections */
  section { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 28px 32px; margin-bottom: 20px; }
  section h2 { font-size: 1.2rem; font-weight: 700; color: #111827; margin-bottom: 14px; padding-bottom: 8px; border-bottom: 2px solid #f3f4f6; }
  section p { margin-bottom: 12px; color: #374151; }
  section p:last-child { margin-bottom: 0; }
  section ul { padding-left: 20px; }
  section li { margin-bottom: 8px; color: #374151; }
  section li:last-child { margin-bottom: 0; }
  section img { max-width: 100%; border-radius: 8px; margin: 12px 0; }

  /* Further reading */
  .reading-item { margin-bottom: 10px; }
  .reading-item a { color: #2563eb; text-decoration: none; font-weight: 500; }
  .reading-item a:hover { text-decoration: underline; }
  .reading-item span { color: #6b7280; font-size: 0.9rem; }

  /* Related laws */
  .related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
  .related-card {
    display: block; padding: 14px 16px; border: 1px solid #e5e7eb; border-radius: 8px;
    text-decoration: none; color: inherit; transition: all 0.15s ease;
  }
  .related-card:hover { border-color: #2563eb; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
  .related-card strong { display: block; font-size: 0.925rem; color: #111827; margin-bottom: 2px; }
  .related-card span { font-size: 0.8rem; color: #6b7280; }

  /* 404 state */
  .not-found { text-align: center; padding: 80px 20px; display: none; }
  .not-found.show { display: block; }
  .not-found h2 { font-size: 1.5rem; color: #111827; margin-bottom: 8px; }
  .not-found p { color: #6b7280; }

  /* Footer */
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
  <nav><a href="../index.html">&larr; 返回列表</a></nav>

  <div id="content"></div>
  <div class="not-found" id="not-found">
    <h2>未找到该法则</h2>
    <p>请检查链接是否正确，或<a href="../index.html">返回首页</a>浏览全部法则。</p>
  </div>

  <footer>
    <p>© 2026 <a href="https://lawsofsoftwareengineering.com/" target="_blank" rel="noopener">Dr. Milan Milanović</a></p>
    <p>中文翻译 · 内容基于 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener">CC BY-NC-ND 4.0</a> 许可</p>
  </footer>
</div>

<script src="../laws-zh.js"></script>
<script>
(function() {
  // 从 URL 路径提取 slug: /laws/conways-law/ → conways-law
  var path = window.location.pathname;
  var slug = path.replace(/^\/|\/$/g, '').split('/').pop();

  var law = LAWS.find(function(l) { return l.slug === slug; });

  if (!law) {
    document.getElementById('not-found').classList.add('show');
    document.title = '未找到 — 软件工程法则';
    return;
  }

  document.title = law.title + ' — 软件工程法则';
  document.querySelector('meta[name="description"]').content = law.title + ': ' + law.description;

  var levelClass = law.experience === 'senior' ? 'senior' : (law.experience === 'mid' ? 'mid' : '');

  // Related laws
  var relatedHtml = '';
  if (law.related && law.related.length > 0) {
    var relatedCards = law.related.map(function(slug) {
      var r = LAWS.find(function(l) { return l.slug === slug; });
      if (!r) return '';
      return '<a class="related-card" href="../laws/' + r.slug + '/"><strong>' + r.title + '</strong><span>' + (GROUP_MAP[r.group] || r.group) + '</span></a>';
    }).filter(Boolean).join('');
    if (relatedCards) {
      relatedHtml = '<section><h2>相关法则</h2><div class="related-grid">' + relatedCards + '</div></section>';
    }
  }

  // Further reading
  var readingHtml = '';
  if (law.further_reading && law.further_reading.length > 0) {
    var items = law.further_reading.map(function(r) {
      return '<div class="reading-item"><a href="' + r.url + '" target="_blank" rel="noopener">' + r.title + '</a> <span>— ' + (r.description || '') + '</span></div>';
    }).join('');
    readingHtml = '<section><h2>参考阅读</h2>' + items + '</section>';
  }

  // Takeaways
  var takeawaysHtml = '';
  if (law.takeaways && law.takeaways.length > 0) {
    takeawaysHtml = '<section><h2>要点总结</h2><ul>' + law.takeaways.map(function(t) { return '<li>' + t + '</li>'; }).join('') + '</ul></section>';
  }

  var html =
    '<article>' +
      '<div class="article-header">' +
        '<h1>' + law.title + '</h1>' +
        '<div class="title-en">' + law.titleEn + '</div>' +
        '<div class="tags-row">' +
          '<span class="tag tag-group">' + (GROUP_MAP[law.group] || law.group) + '</span>' +
          '<span class="tag tag-level' + (levelClass ? ' ' + levelClass : '') + '">' + (LEVEL_MAP[law.experience] || law.experience) + '</span>' +
        '</div>' +
        '<blockquote>' + law.description + '</blockquote>' +
      '</div>' +
      takeawaysHtml +
      '<section><h2>概述</h2>' + (law.image ? '<img src="' + law.image + '" alt="' + law.title + '" loading="lazy" />' : '') + '<p>' + law.overview + '</p></section>' +
      '<section><h2>案例</h2><p>' + law.examples + '</p></section>' +
      '<section><h2>起源</h2><p>' + law.origins + '</p></section>' +
      readingHtml +
      relatedHtml +
    '</article>';

  document.getElementById('content').innerHTML = html;
})();
</script>
</body>
</html>
```

- [ ] **Step 2: 验证详情页**

在浏览器中打开 `laws/detail.html`，确认：
- 无 slug 时显示 "未找到该法则"（因为直接打开 detail.html 无 slug）
- 后续通过 Cloudflare 部署后 `/laws/conways-law/` 应正确渲染康威定律

---

### Task 4: 创建 Cloudflare 配置文件

**Files:**
- Create: `_redirects`
- Create: `_headers`

- [ ] **Step 1: 创建 _redirects**

```txt
# 将所有 /laws/* 请求指向 detail.html（保持 URL 不变）
/laws/*  /laws/detail.html  200
```

此规则让 `/laws/conways-law/`、`/laws/brooks-law/` 等所有 URL 都由 `detail.html` 处理，而浏览器地址栏 URL 不变。

- [ ] **Step 2: 创建 _headers**

```txt
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

---

### Task 5: 本地测试

- [ ] **Step 1: 验证数据文件**

```bash
node -e "eval(require('fs').readFileSync('laws-zh.js','utf8').replace(/^const /gm,'var ')); console.log('LAWS count:', LAWS.length); console.log('GROUPS:', [...new Set(LAWS.map(l=>l.group))]); console.log('Slugs:', LAWS.map(l=>l.slug).join(', '))"
```

- [ ] **Step 2: 在浏览器中测试 index.html**

打开 `index.html`：
- [ ] 56 张卡片全部渲染
- [ ] 级别筛选：点击「初级」只显示 junior 法则，「中级」只显示 mid，「高级」只显示 senior，「全部」恢复
- [ ] 类别筛选：点击各分类标签，卡片正确过滤
- [ ] 组合筛选：级别 + 类别同时生效
- [ ] 「全部」按钮重置筛选
- [ ] 无匹配时显示空状态提示
- [ ] 响应式：缩放浏览器，桌面 3 列 → 平板 2 列 → 手机 1 列
- [ ] 点击卡片跳转到 `laws/<slug>/` 详情页

- [ ] **Step 3: 验证详情页渲染**

通过 index.html 点击进入任意详情页（或直接打开 `laws/detail.html` 后手动构造 URL），检查：
- [ ] 中文名称 + 英文原名正确显示
- [ ] 类别和级别标签样式正确
- [ ] 核心叙述 blockquote 显示
- [ ] 要点总结（有序列表）、概述（含图片）、案例、起源、参考阅读、相关法则各区块完整
- [ ] 相关法则卡片可点击跳转
- [ ] 返回列表链接正常工作
- [ ] 不存在的 slug 显示 404 提示
- [ ] 页脚署名和许可信息正确

- [ ] **Step 4: 移动端响应式测试**

Chrome DevTools 切换到移动设备视口（375px / 414px）：
- [ ] 卡片单列布局
- [ ] 筛选按钮换行正常
- [ ] 详情页内容不溢出
- [ ] 触摸目标足够大

---

### Task 6: 提交到 Git

- [ ] **Step 1: 提交所有文件**

```bash
git add laws-zh.js index.html laws/detail.html _redirects _headers
git commit -m "feat: implement Chinese translation site for Laws of SE

- laws-zh.js: 56 laws translated to Chinese with full detail content
- index.html: main listing page with level/category filters
- laws/detail.html: detail page template for all law URLs
- _redirects: Cloudflare Pages routing config
- _headers: security headers"
```
