import { useEffect, useState } from 'react';
import axiosClient from '@/utils/axiosClient';

type NavLink = {
  title: string;
  uri: string;
  key: string;
};

export default function Navigation() {
  const [navItems, setNavItems] = useState<NavLink[]>([]);

  useEffect(() => {
    async function fetchNavigation() {
      try {
        const response = await axiosClient.get('api/v1/nav/?depth=2');
        
        const navLinks = response.data?.entity?.children?.map((link: any) => ({
          title: link?.title || 'Untitled',
          uri: link?.href || '#',          
          key: `${link?.folder}${link?.hash}${link.host}`
        })) || [];

        setNavItems(navLinks);
      } catch (error) {
        console.error('Error fetching navigation items:', error);
      }
    }
    fetchNavigation();
  }, []);

  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.key}>
            <a className="hover:text-green-500 hover:underline" href={`${process.env.NEXT_PUBLIC_DOTCMS_HOST}${item.uri}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
