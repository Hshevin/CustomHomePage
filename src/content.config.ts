import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const home = defineCollection({
	loader: glob({ base: "./src/content/home", pattern: "**/*.{md,mdx,json}" }),
	schema: z.object({
		section: z.enum(["profile", "project", "timeline", "contact"]),
		order: z.number().default(0),
		name: z.string().optional(),
		status: z.string().optional(),
		title: z.string().optional(),
		type: z.string().optional(),
		href: z.string().optional(),
		description: z.string().optional(),
		time: z.string().optional(),
		items: z
			.array(
				z.object({
					label: z.string(),
					value: z.string(),
					href: z.string().optional(),
				}),
			)
			.optional(),
	}),
});

// 日记仍然写在 src/pages/diary（Obsidian 库就在那里），这里只读取标题和日期，用来生成列表和翻页。
const diary = defineCollection({
	loader: glob({ base: "./src/pages/diary", pattern: "[!_]*.md" }),
	schema: z.object({
		title: z.string().nullish(),
		date: z
			.union([z.string(), z.date()])
			.nullish()
			.transform((value) =>
				value instanceof Date ? value.toISOString().slice(0, 10).replaceAll("-", ".") : (value ?? ""),
			),
	}),
});

export const collections = { home, diary };
