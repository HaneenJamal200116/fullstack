
import { useQuery } from "@apollo/client";
// @ts-ignore

import { client, GET_ALL_PRODUCTS } from '../constants/index';
import { useNavigate } from "react-router-dom";


const AllProducts = () => {

  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS, { client });
  const navigate = useNavigate();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (

    <section className='min-h-screen w-full  flex flex-col relative top-[50px]'>
      <div>
        <p className="text-4xl  h-[68px]  text-left ml-15 "> All Products</p>
      </div>
      <div className=" mt-5 ml-10">

      <ul className="grid grid-cols-3 gap-5">
        {data.products.map((product: { id: string; name: string; instock: boolean; gallery: { imageUrl: string }[]; price: { amount: number; currency: { symbol: string }[] }[] }) => (
          <li
          onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer flex flex-col mb-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
            key={product.id}
          >
            <div className="relative flex justify-center items-center rounded-md p-5">
              <img
                className={`h-[300px] w-[400px] object-cover ${!product.instock ? 'grayscale brightness-75' : ''}`}
                src={product.gallery[0].imageUrl}
                alt={product.name}
              />

              {!product.instock && (
                <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-2xl font-semibold">Out of Stock</span>
                </div>
              )}
            </div>

            <div className="text-left ml-5 mb-5 mt-4">
              <div className="font-light">{product.name}</div>
              <div className="font-normal">{product.price[0].currency[0].symbol}{product.price[0].amount}</div>
            </div>
          </li>
        ))}
      </ul>

        </div>


    </section>
   
  );
};

export default AllProducts;
