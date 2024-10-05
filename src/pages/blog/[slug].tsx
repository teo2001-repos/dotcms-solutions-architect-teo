import { GetServerSideProps } from 'next';
import axiosClient from '@/utils/axiosClient';
import Navigation from '@/components/Navigation';
import ProductPromo from '@/components/ProductPromo';

type Blog = {
  title: string;
  ogDescription: string;
  publishDate: string;
};

type BlogDetailProps = {
  blog: Blog | null;
};

export default function BlogDetail({ blog }: BlogDetailProps) {
  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-white">
      <Navigation />
      <hr className="my-3 mb-6"/>
      <h1 className="text-4xl font-bold my-6">{blog.title}</h1>
      <div className="prose">{blog.ogDescription}</div>
      <p className="mt-4 text-gray-500">Published: {new Date(blog.publishDate).toLocaleDateString()}</p>
      <ProductPromo />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };

  try {
    const blogResponse = await axiosClient.get(`/api/content/inode/${slug}`);
    const blog = blogResponse.data.contentlets[0] || null;

    return {
      props: { blog },
    };
  } catch (error) {
    console.error('Error fetching blog detail:', error);
    return { props: { blog: null } };
  }
};
