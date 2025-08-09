import { promises as fs } from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');

export async function getBlogPosts() {
    const files = await fs.readdir(blogDir);
    return files.filter(file => file.endsWith('.md'));
}

export async function getBlogPost(slug) {
    const markdownFilePath = path.join(blogDir, `${slug}.md`);
    return await fs.readFile(markdownFilePath, 'utf-8');
}
