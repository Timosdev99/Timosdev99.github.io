'use client';

import Link from 'next/link';

const BlogList = ({ topics }) => {
    return (
        <ul className="mt-4 text-blue-300 underline ml-4">
            {topics.map(topic => (
                <li key={topic}>
                    <Link href={`/blog/${topic.replace('.md', '')}`}>
                        <p className="text-xl font-bold cursor-pointer">{topic.replace('.md', '')}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default BlogList;
