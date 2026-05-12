# 软件工程法则中文站 (Laws of SE — Chinese)

翻译自 https://lawsofsoftwareengineering.com/ ，保留 56 条软件工程法则的核心内容，纯静态多页面中文站点。
线上地址：https://lawsofsoftwareengineering.vaste.top

## 项目结构

```
index.html              # 首页：卡片网格 + 级别/类别筛选
laws-zh.js              # 56 条法则中文数据（供 index.html 渲染卡片列表）
laws/                   # 56 条法则各自独立的详情页
  style.css             #   共享样式表（所有详情页共用）
  conways-law/
    index.html          #   康威定律详情页
  brooks-law/
    index.html          #   布鲁克斯定律详情页
  ...                   #   其余 54 条（每个 slug 一个目录）
translations.json       # 中文翻译对照表（手动维护的翻译源）
apply-translations.js   # 生成器：读取 api.json + translations.json → 写入 laws-zh.js
build-detail-pages.js   # 生成器：生成 56 条 laws/<slug>/index.html 详情页
api.json                # 英文源数据（来自 lawsofsoftwareengineering.com/api.json）
```

## 翻译更新流程

1. 编辑 `translations.json`，按 slug 为键添加或修改翻译。每条法则包含：`title`, `desc`, `overview`, `examples`, `origins`, `takeaways`（数组）, `readingDesc`（数组）
2. 运行 `node apply-translations.js` 重新生成 `laws-zh.js`
3. 运行 `node build-detail-pages.js` 重新生成 56 个详情页
4. 在浏览器打开 `index.html` 验证

## 翻译规范

- 人名保留英文原名，首次出现时用括号标注中文译名，如「梅尔文·康威（Melvin Conway）」
- 法则名称使用业界通行中文译法
- 技术术语使用标准中文等价词
- 英文网站链接直接保留原始 URL 不作翻译

## `readingDesc` 对齐规则

`translations.json` 中每条法则的 `readingDesc` 数组长度必须等于 `api.json` 中对应法则 `further_reading` 数组的长度，且按相同索引一一对应。长度不匹配或顺序错误会导致生成的页面出现英文描述。

## 部署

Cloudflare Pages 直连 GitHub 仓库，自动部署 master 分支。无需构建命令，无 `_redirects` 规则——每条法则的 `/laws/<slug>/` URL 由标准的 `index.html` 文件解析提供。

## 许可

内容基于 CC BY-NC-ND 4.0 许可，原作者 Dr. Milan Milanović。
