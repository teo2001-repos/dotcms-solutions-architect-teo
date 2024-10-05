import { GetServerSideProps } from 'next';
import axiosClient from '@/utils/axiosClient';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Banner from '@/components/Banner';
import ProductPromo from '@/components/ProductPromo';
import { Blog, HomeProps } from '@/types/types';
// import { DotCmsClient } from '@dotcms/client';
// import BlogListGraphQL from '@/components/BlogListGraphQL';

export default function Home({ blogs }: HomeProps) {
  return (
    <div className="container text-center mx-auto p-4">
      <Navigation />
      <hr />
      <h1 className="text-3xl text-green-500 my-5">Technical Demo Challenge - Teo</h1>
      <div>
        <h1 className="text-3xl font-bold my-4">Banner carrousel</h1>
        <Banner />
      </div>
      <hr className="my-6"/>
      <div className="my-6">
        <h1 className="text-3xl font-bold my-4">Blog Posts</h1>
        <ul className="list-none">
          {blogs.map((blog) => (
            <li key={blog.identifier} className="mb-2">
              <Link className="text-blue-500 hover:underline" href={`/blog/${blog.inode}`}>
                {blog.title}
              </Link>
              <p className="text-sm text-gray-500">
              </p>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-6"/>
      <ProductPromo />
      {/* <BlogListGraphQL /> */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const blogsResponse = await axiosClient.get('/api/content/query/+contentType:Blog/orderby/Blog.postingDate%20desc');
    const blogs = blogsResponse.data.contentlets || [];
  
    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return { props: { blogs: [] } };
  }
};
