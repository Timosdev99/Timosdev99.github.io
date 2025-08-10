import { getBlogPost, getBlogPosts } from '@/lib/blog';
import { NextResponse } from 'next/server';

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function GET(request, { params }) {
    try {
        const content = await getBlogPost(params.slug);
        return NextResponse.json({ content });
    } catch (error) {
        return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }
}