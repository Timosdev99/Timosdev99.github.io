'use client';

import Link from 'next/link';

const BlogList = ({ posts }) => {
    return (
        <ul className="mt-4 text-blue-300 underline ml-4">
            {posts.map(post => (
                <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                        <p className="text-xl font-bold cursor-pointer">{post.title}</p>
                    </Link>
                    <p className="text-gray-400 text-sm">{post.date}</p>
                </li>
            ))}
        </ul>
    );
};

export default BlogList;
