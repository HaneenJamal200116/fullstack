
import { useQuery } from "@apollo/client";
// @ts-ignore

import { client, GET_CLOTHES_PRODUCTS } from '../constants/index';

// Example component to fetch and display categories
const Products = () => {
  const { loading, error, data } = useQuery(GET_CLOTHES_PRODUCTS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.clothingProducts.map((product: { id: string; name: string ; instock: boolean; gallery :{imageUrl: string}[];  price: { amount: number; currency: { symbol: string}[] }[] }) => (
        <li key={product.id}>{product.name} - {product.price[0].amount}{product.price[0].currency[0].symbol} - {product.instock ? 'In stock' : 'Out of stock'} 
            <img src={product.gallery[0].imageUrl} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default Products;
