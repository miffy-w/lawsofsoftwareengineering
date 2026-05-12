# 软件工程法则中文站 (Laws of SE — Chinese)

翻译自 https://lawsofsoftwareengineering.com/ ，保留 56 条软件工程法则的核心内容，纯静态多页面中文站点。

## 项目结构

```
index.html              # 首页：卡片网格 + 级别/类别筛选
laws-zh.js              # 56 条法则完整中文数据（由 apply-translations.js 生成）
laws/detail.html        # 详情页模板（Cloudflare _redirects 将所有 /laws/* 路由至此）
translations.json       # 中文翻译对照表（手动维护的翻译源）
apply-translations.js   # 生成器：读取 api.json + translations.json → 写入 laws-zh.js
api.json                # 英文源数据（来自 lawsofsoftwareengineering.com/api.json）
_redirects              # Cloudflare Pages 路由：/laws/* → /laws/detail.html (200)
_headers                # 安全响应头
```

## 翻译更新流程

1. 编辑 `translations.json`，按 slug 为键添加或修改翻译。每条法则包含：`title`, `desc`, `overview`, `examples`, `origins`, `takeaways`（数组）, `readingDesc`（数组）
2. 运行 `node apply-translations.js` 重新生成 `laws-zh.js`
3. 在浏览器打开 `index.html` 验证

## 翻译规范

- 人名保留英文原名，首次出现时用括号标注中文译名，如「梅尔文·康威（Melvin Conway）」
- 法则名称使用业界通行中文译法
- 技术术语使用标准中文等价词
- 英文网站链接直接保留原始 URL 不作翻译

## 部署

部署到 Cloudflare Pages：
- 无构建命令，输出目录为根目录 `/`
- `_redirects` 将所有 `/laws/*` 请求以 200 状态指向 `/laws/detail.html`
- 详情页从 `window.location.pathname` 提取 slug 动态渲染

## 许可

内容基于 CC BY-NC-ND 4.0 许可，原作者 Dr. Milan Milanović。
