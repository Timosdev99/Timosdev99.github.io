import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');

export async function getBlogPosts() {
    const files = await fs.readdir(blogDir);
    const posts = await Promise.all(files
        .filter(file => file.endsWith('.md'))
        .map(async (file) => {
            const filePath = path.join(blogDir, file);
            const fileContent = await fs.readFile(filePath, 'utf-8');
            const { data } = matter(fileContent);
            return {
                slug: file.replace('.md', ''),
                ...data,
            };
        }));
    return posts;
}

export async function getBlogPost(slug) {
    const markdownFilePath = path.join(blogDir, `${slug}.md`);
    const fileContent = await fs.readFile(markdownFilePath, 'utf-8');
    const { data, content } = matter(fileContent);
    return {
        ...data,
        content,
    };
}