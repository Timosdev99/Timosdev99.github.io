import BlogPostContent from '@/app/component/blogPost';
import { getBlogPosts, getBlogPost } from '@/lib/blog';

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map(post => ({
        slug: post.slug,
    }));
}

const BlogPost = async ({ params }) => {
    const { content, date } = await getBlogPost(params.slug);

    return (
        <div className="mt-32 justify-center h-auto grid lg:grid-cols-1 gap-x-6 gap-y-6 p-2 sm:grid-cols-1">
            <div
                className="px-4 py-16  justify-center text-left rounded-3xl text-lg text-white"
            >
                <BlogPostContent content={content} date={date} />
            </div>
        </div>
    );
};

export default BlogPost;
