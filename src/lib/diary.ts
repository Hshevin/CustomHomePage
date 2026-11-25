import { getCollection } from "astro:content";

export type DiaryPost = {
	title: string;
	date: string;
	url: string;
};

// 以下划线开头的文件（如 _template.md）不生成页面，也不进列表；没写标题的先不列出。
export const getDiaryPosts = async (): Promise<DiaryPost[]> =>
	(await getCollection("diary"))
		.filter((entry) => entry.data.title && entry.filePath)
		.map((entry) => ({
			title: entry.data.title as string,
			date: entry.data.date,
			url: (entry.filePath as string).replace(/^src\/pages/, "").replace(/\.md$/, ""),
		}))
		.sort((a, b) => b.date.localeCompare(a.date));
