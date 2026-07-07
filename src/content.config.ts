import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const home = defineCollection({
	loader: glob({ base: "./src/content/home", pattern: "**/*.{md,mdx,json}" }),
	schema: z.object({
		section: z.enum(["profile", "about", "skills", "project", "timeline", "contact"]),
		order: z.number().default(0),
		name: z.string().optional(),
		role: z.string().optional(),
		status: z.string().optional(),
		title: z.string().optional(),
		kicker: z.string().optional(),
		type: z.string().optional(),
		href: z.string().optional(),
		description: z.string().optional(),
		time: z.string().optional(),
		items: z
			.array(
				z.object({
					label: z.string().optional(),
					value: z.string(),
					href: z.string().optional(),
				}),
			)
			.optional(),
	}),
});

export const collections = { blog, home };
