# 首页内容修改说明

首页内容放在 `src/content/home/`。页面会读取每个文件的 `section` 字段，把内容自动分到对应模块，再按 `order` 从小到大排序。

## 基本规则

- `section` 决定内容显示在哪个模块。
- `order` 决定同类内容的排序，数字越小越靠前。
- Markdown 适合写带正文的内容，比如简介、项目、经历。
- JSON 适合写列表数据，比如技能、联系方式。
- 没有确认的真实经历、公司、学校或项目，不要写成确定事实，可以继续保留“待补充”。

## 修改首屏简介

编辑 `src/content/home/profile.md`：

```md
---
section: profile
order: 0
name: empathless
role: 开发者
status: 正在整理个人项目、文章和一些小成果。
---

这里写首屏下面的个人简介。
```

## 修改关于我

编辑 `src/content/home/about.md`。正文会显示在“一个持续维护的个人索引”这一块。

## 修改技能

编辑 `src/content/home/skills.json`，在 `items` 里增删：

```json
{
  "section": "skills",
  "order": 20,
  "items": [
    { "value": "Web 开发" },
    { "value": "后端接口" }
  ]
}
```

## 新增项目或小成果

在 `src/content/home/projects/` 下新建一个 Markdown 文件，例如 `my-tool.md`：

```md
---
section: project
order: 40
title: 我的工具
type: 工具 / 2026
href: https://example.com
description: 一句话说明它做了什么，以及你负责了什么。
---
```

项目卡片现在使用元数据渲染。以后如果要展示更长正文，可以再扩展页面模板。

## 新增经历

在 `src/content/home/timeline/` 下新建一个 Markdown 文件，例如 `open-source.md`：

```md
---
section: timeline
order: 40
time: 2026
title: 经历标题
description: 用真实、简短的一句话说明这段经历。
---
```

## 修改联系方式

编辑 `src/content/home/contact.json`：

```json
{
  "section": "contact",
  "order": 90,
  "kicker": "Contact",
  "title": "保持一个可更新的入口",
  "description": "这里写联系方式区域的说明。",
  "items": [
    {
      "label": "Email",
      "value": "me@example.com",
      "href": "mailto:me@example.com"
    }
  ]
}
```

## 预览

运行：

```bash
astro dev --background
```

打开 `http://localhost:4321`。如果服务已经在运行，保存内容文件后刷新页面即可。
