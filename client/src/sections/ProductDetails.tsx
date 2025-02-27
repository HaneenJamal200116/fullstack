import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
// @ts-ignore
import { client, GET_PRODUCT } from '../constants/index';
import parse from 'html-react-parser'
const ProductDetail = () => {
  const { id } = useParams(); 
  const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id }, client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data.product;

  return (
    <section className="min-h-screen w-full flex flex-col items-center p-10">
{product.gallery.map((image: { imageUrl: string }, index: number) => (
  <img key={index} src={image.imageUrl} alt={`Product image ${index + 1}`} />
))}


      <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
      {parse(product.description)}
      <p className="text-xl font-semibold mt-2">{product.price[0].currency.symbol}{product.price[0].amount}</p>
      {!product.instock && <p className="text-red-500 text-lg font-bold mt-2">Out of Stock</p>}

    
    </section>
  );
};
export default ProductDetail
