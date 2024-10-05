import { useEffect, useState } from 'react';
import axiosClient from '@/utils/axiosClient';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BannerType } from '@/types/types';
import Image from 'next/image';

export default function Banner() {
  const [banners, setBanners] = useState<BannerType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchBanners() {
      setIsLoading(true);
      try {
        const response = await axiosClient.get('/api/content/render/false/query/+contentType:Banner/orderby/modDate%20desc');
        setBanners(response.data.contentlets);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
      setIsLoading(false);
    }
    fetchBanners();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}  width={"50%"} className="flex justify-center items-center text-center">
      {banners.map((banner) => (
        <div key={banner.identifier} className="banner-item">
          <Image
            src={`${process.env.NEXT_PUBLIC_DOTCMS_HOST}/dA/${banner.image}`}
            alt={banner.title}
            width={935}
            height={400}
            style={{ width: '935px', height: '400px' }}
            className="object-cover"
          />
          <h2 className="mb-6 text-xl text-center">{banner.title}</h2>
        </div>
      ))}
    </Carousel>
  );
}
