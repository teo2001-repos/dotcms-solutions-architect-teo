import { useEffect, useState } from 'react';
import axiosClient from '@/utils/axiosClient';

type Blog = {
  title: string;
};

export default function BlogListGraphQL() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const query = `
          {
            blogCollection {
              title
            }
          }
        `;

        const response = await axiosClient.post('/api/v1/graphql', {
          query,
        });

        setBlogs(response.data.data.blogCollection);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Blog Listings (GraphQL)</h2>
      <ul className="list-none">
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4 p-4 border border-gray-200 rounded-md">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
