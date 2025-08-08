import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
    const markdownFilePath = path.join(process.cwd(), 'src', 'app', 'blog', 'collition.md');
    const markdown = await fs.readFile(markdownFilePath, 'utf-8');
    return NextResponse.json({ content: markdown });
}
