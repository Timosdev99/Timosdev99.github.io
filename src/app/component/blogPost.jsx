'use client';

import { marked } from 'marked';
import './blogPost.css';

const BlogPostContent = ({ content }) => {
    const htmlContent = marked(content);
    return (
        <div
            className="blog-post-content mt-4"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
};

export default BlogPostContent;