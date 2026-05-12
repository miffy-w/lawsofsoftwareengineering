# 软件工程法则中文站 — 设计文档

## 目标

将 https://lawsofsoftwareengineering.com/ 翻译为中文静态站点，保留核心功能（56 条法则列表、分类/级别筛选、独立详情页），移除营销内容（书籍推广、Newsletter、Poster）。

## 技术选型

**方案 A：纯静态多页面**

- 1 个首页 `index.html` + 56 个详情页 + 1 个共享数据文件 `laws-zh.js`
- 零依赖、零构建步骤
- 部署到 Cloudflare Pages

## 内容策略

### 保留
- 56 条法则完整信息：名称、核心描述、要点（takeaways）、概述（overview）、案例（examples）、起源（origins）、参考阅读（further_reading）、相关法则（related）
- 分类筛选（7 类）：Teams、Planning、Architecture、Quality、Scale、Design、Decisions
- 级别筛选（3 级）：Junior、Mid-Level、Senior
- 页脚署名：© 2026 Dr. Milan Milanović + CC BY-NC-ND 4.0
- 法则配图（引用原站图片 URL）

### 移除
- 书籍推广、Newsletter 订阅、Poster 链接
- 引用格式区块（APA/BibTeX）
- 导航中 Book/Poster/Newsletter 链接
- 侧边栏

### 翻译策略
- 人名保留英文原文
- 法则名称用中文通用译名，首次出现附英文原名
- 专业术语使用通行中文译法
- 描述文字准确完整翻译

## 页面结构

### 首页 `index.html`
- 标题 + 副标题
- 级别筛选按钮组 + 类别筛选按钮组
- 56 张法则卡片网格（响应式：桌面 ≥3 列，平板 2 列，手机 1 列）
- 卡片内容：中文名称、一句话描述、英文原名（灰色小字）、类别/级别标签
- 点击跳转到详情页
- 页脚

### 详情页 `laws/<slug>.html`
- 返回列表链接
- 中文名称 + 英文原名
- 类别/级别标签
- 核心叙述（加粗引用）
- 要点总结（无序列表）
- 概述（配图 + 段落）
- 案例
- 起源
- 参考阅读（外部链接列表）
- 相关法则（迷你卡片）
- 页脚

## 视觉风格
- 白色背景、深色文字、蓝色强调色（参考原站风格）
- 中文字体栈：PingFang SC / Microsoft YaHei / Noto Sans SC
- 无外部 CSS 框架，无图标库

## 文件组织

```
/
├── index.html              # 首页
├── laws-zh.js              # 全部 56 条中文数据
├── laws/
│   ├── conways-law.html
│   ├── brooks-law.html
│   └── ...                 # 其余 54 个
├── _redirects              # Cloudflare 配置
└── _headers                # 安全头
```

## 数据流

```
原站 api.json → 提取 + 翻译 → laws-zh.js → index.html（列表）/ laws/*.html（详情）
```

详情页通过 `<script src="../laws-zh.js">` 加载数据，根据自身文件名匹配对应法则并渲染。

## 实现步骤

1. 从原站 `/api.json` 获取完整 56 条数据
2. 翻译所有字段，生成 `laws-zh.js`
3. 手写 `index.html`（列表页 + 筛选逻辑）
4. 创建详情页模板，脚本批量生成 56 个 `laws/*.html`
5. 全局 CSS 样式（内嵌）
6. 测试：筛选、响应式、链接跳转
7. 部署到 Cloudflare Pages
