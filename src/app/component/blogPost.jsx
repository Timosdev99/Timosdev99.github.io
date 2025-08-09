'use client';

import { marked } from 'marked';
import './blogPost.css';

const BlogPostContent = ({ content, date }) => {
    const htmlContent = marked(content);
    return (
        <div>
            <p className="text-gray-400 text-sm">{date}</p>
            <div
                className="blog-post-content mt-4"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
        </div>
    );
};

export default BlogPostContent;