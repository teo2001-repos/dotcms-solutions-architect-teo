import { useEffect, useState } from 'react';
import axiosClient from '@/utils/axiosClient';

type Product = {
  identifier: string;
  image: string;
  title: string;
  retailPrice: string;
  salePrice: string;
};

export default function ProductPromo() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axiosClient.get('/api/content/query/+contentType:product');
        setProducts(response.data.contentlets);
      } catch (error) {
        console.error('Error fetching product promotions:', error);
      }
    }
    fetchProducts();
  }, []);


  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-6">Product Promotions</h2>
      <ul className="list-none p-0" style={{ width: '350px' }}>
        {products.map((product) => (
          <li key={product.identifier} className="flex flex-col items-center my-6 py-6 border border-black">
            <img
              src={`${process.env.NEXT_PUBLIC_DOTCMS_HOST}${product.image}`}
              style={{ width: '290px', height: '250px' }}
              className="mb-4"
              alt={product.title}
            />
            <h3 className="text-xl mb-2">{product.title}</h3>
            {product.salePrice && <p className="font-bold text-red-600">Sale Price: {product.salePrice}</p>}
            <p>Retail Price: <strong>{product.retailPrice}</strong> </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
