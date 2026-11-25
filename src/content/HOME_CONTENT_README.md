# 首页内容修改说明

首页内容放在 `src/content/home/`，日记放在 `src/pages/diary/`。

页面按每个文件的 `section` 把内容分到对应模块，同类内容按 `order` 从小到大排。**某个模块没有内容时整块不显示**，导航和编号也会自动跳过它，所以不需要放占位文字。

只写确认过的真实信息。

## 首屏与“关于”

编辑 `src/content/home/profile.md`：

```md
---
section: profile
name: empathless
status: 名字下面那一句话。
---

右侧“关于”的正文。
```

## 记录（日记）

在 `src/pages/diary/` 新建 Markdown（用 Obsidian 的日记模板即可，模板是 `_template.md`）：

```md
---
layout: ../../layouts/DiaryLayout.astro
title: 标题
date: "2026.07.05"
---

正文。
```

- 首页按日期从新到旧列出所有记录；日记页底部可以翻到较早或较新的一篇。
- 没写 `title` 的不会出现在列表里。
- 文件名以下划线开头（如 `_template.md`）的不会生成页面。

## 作品

在 `src/content/home/projects/` 下新建 Markdown，例如 `my-tool.md`：

```md
---
section: project
order: 10
title: 我的工具
type: 工具 / 2026
href: https://example.com
description: 一句话说明它做了什么。
---
```

## 经历

在 `src/content/home/timeline/` 下新建 Markdown：

```md
---
section: timeline
order: 10
time: 2026
title: 经历标题
description: 一句话说明。
---
```

## 联系

编辑 `src/content/home/contact.json`，在 `items` 里加：

```json
{
  "section": "contact",
  "order": 90,
  "items": [
    { "label": "GitHub", "value": "github.com/yourname", "href": "https://github.com/yourname" },
    { "label": "Email", "value": "me@example.com", "href": "mailto:me@example.com" }
  ]
}
```

## 预览

```bash
astro dev --background
```

打开 `http://localhost:4321`，保存后刷新即可。
