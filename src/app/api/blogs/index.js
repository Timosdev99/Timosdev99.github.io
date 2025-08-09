import { getBlogPosts } from '@/lib/blog';
import { NextResponse } from 'next/server';

export async function GET() {
    const files = await getBlogPosts();
    return NextResponse.json({ files });
}
