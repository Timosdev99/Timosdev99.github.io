"use client";
import { useState, useEffect } from 'react';
import { marked } from 'marked';

const Blogs = () => {
    const [htmlContent, setHtmlContent] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        fetch('/api/blog')
            .then(res => res.json())
            .then(data => {
                setHtmlContent(marked(data.content));
            });
    }, []);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mt-32 justify-center h-auto grid lg:grid-cols-1 gap-x-6 gap-y-6 p-2 sm:grid-cols-1">
            <div
                className="px-4 py-16 bg-gradient-to-l from-blue-700 via-slate-700 to-black-900 justify-center text-left rounded-3xl text-lg text-white"
            >
                <h1 className="text-3xl font-bold cursor-pointer" onClick={toggleOpen}>
                    Late night thought
                </h1>
                {isOpen && (
                    <div
                        className="mt-4"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                )}
            </div>
        </div>
    );
};

export default Blogs;