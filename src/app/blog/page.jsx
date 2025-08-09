import BlogList from '@/app/component/blogList';
import { getBlogPosts } from '@/lib/blog';

const Blogs = async () => {
    const topics = await getBlogPosts();

    return (
        <div className="mt-32 justify-center h-auto grid lg:grid-cols-1 gap-x-6 gap-y-6 p-2 sm:grid-cols-1">
            <div
                className="px-4 py-16  justify-center text-left rounded-3xl text-lg text-white"
            >
                <h1 className="text-3xl text-white font-bold">Late night thought</h1>
                <BlogList  topics={topics} />
            </div>
        </div>
    );
};

export default Blogs;
