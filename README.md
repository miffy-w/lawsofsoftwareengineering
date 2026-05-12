# 软件工程法则（中文站）

翻译自 [lawsofsoftwareengineering.com](https://lawsofsoftwareengineering.com/)，56 条经典软件工程法则的完整中文化站点。

## 访问

**[lawsofsoftwareengineering.vaste.top](https://lawsofsoftwareengineering.vaste.top)**

## 内容

涵盖 7 大分类、3 个经验级别的 56 条法则：

| 分类 | 示例法则 |
|------|----------|
| 团队 | 康威定律、童子军规则 |
| 规划 | 布鲁克斯定律、YAGNI |
| 架构 | CAP 定理、加尔定律 |
| 质量 | 海勒姆定律、测试金字塔 |
| 规模 | 第二系统效应、分布式计算谬误 |
| 设计 | DRY、KISS、迪米特法则 |
| 决策 | 奥卡姆剃刀、确认偏误 |

## 翻译规范

- 人名保留英文原名，首次出现时括号标注中文译名
- 法则名称使用业界通行中文译法
- 技术术语使用标准中文等价词

## 项目结构

```
index.html           # 首页（列表 + 筛选）
laws-zh.js           # 56 条法则中文数据
laws/detail.html     # 详情页模板（Cloudflare _redirects 路由至此）
translations.json    # 翻译对照表
apply-translations.js # 生成器脚本
```

## 修改翻译

编辑 `translations.json`，然后运行：

```bash
node apply-translations.js
```

## 许可

内容基于 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) 许可，原作者 [Dr. Milan Milanović](https://lawsofsoftwareengineering.com/)。

中文翻译基于同一许可发布。
