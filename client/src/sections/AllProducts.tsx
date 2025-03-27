import { useQuery } from "@apollo/client";
// @ts-ignore

import { client, GET_ALL_PRODUCTS } from "../constants/index";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "./Cart";

const AllProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  type Details = {
    id?: string;
    name?: string;
    price?: number;
    currency?: string;
    image?: string;
    swatchAttr?: any;
    textAttr?: any;
    allTextAttr: any;
    allSwatchAttr: any;
    quantity: number;
  };

  const [productDetails, setProductDetails] = useState<Details[]>([]);
  const [itemCount, setItemCount] = useState(() => {
    return parseInt(localStorage.getItem("CartTotalItems") || "0");
  });

  useEffect(() => {
    if (Object.keys(productDetails).length > 0) {
      localStorage.setItem("CartList", JSON.stringify([productDetails]));
    }
  }, [productDetails]);

  useEffect(() => {
    const handleStorageChange = () => {
      setItemCount(parseInt(localStorage.getItem("CartTotalItems") || "0"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS, { client });
  const navigate = useNavigate();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  localStorage.setItem("CartTotalItems", itemCount.toString());

  return (
    <section className="min-h-screen w-full  flex flex-col  relative top-[50px]">
      <div>
        <p className="text-4xl  h-[68px]  text-left ml-15 "> All Products</p>
      </div>
      <div className=" mt-5 ml-10">
        <ul className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {data.products.map((product: any) => (
            <li
              data-testid={`product-${product.name
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              className="group cursor-pointer flex flex-col mb-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out "
              key={product.id}
            >
              <div onClick={() => navigate(`/all/${product.id}`)}>
                <div className="relative flex justify-center items-center rounded-md p-5">
                  <img
                    className={`h-[300px] w-[400px] object-cover ${
                      !product.instock ? "grayscale brightness-75" : ""
                    }`}
                    src={product.gallery[0].imageUrl}
                    alt={product.name}
                  />

                  {!product.instock && (
                    <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
                      <span className="text-white text-2xl font-semibold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-left ml-5 mb-5 mt-4">
                  <div className="font-light">{product.name}</div>
                  <div className="font-normal">
                    {product.price[0].currency[0].symbol}
                    {product.price[0].amount}
                  </div>
                </div>
              </div>
              {product.instock && (
                <div
                  onClick={() => {
                    setIsModalOpen(true);
                    const newTotalItems = itemCount + 1;
                    setItemCount(newTotalItems);
                    localStorage.setItem(
                      "CartTotalItems",
                      newTotalItems.toString()
                    );

                    window.dispatchEvent(new Event("storage"));

                    const defaultTextAttr: { [key: string]: string } = {};
                    product.textAttribute.forEach(
                      (attr: { name: string; items: { value: string }[] }) => {
                        defaultTextAttr[attr.name] = attr.items[0].value;
                      }
                    );

                    const defaultSwatchAttr: { [key: string]: string } = {};
                    product.swatchAttribute.forEach(
                      (attr: { name: string; items: { value: string }[] }) => {
                        defaultSwatchAttr[attr.name] = attr.items[0].value;
                      }
                    );
                    const prev = JSON.parse(
                      localStorage.getItem("CartList") || "[]"
                    );

                    if (Array.isArray(prev)) {
                      const flattenedPrev = prev.flat(Infinity);
                      const existingProductIndex = flattenedPrev.findIndex(
                        (item: Details) =>
                          item.name === product.name &&
                          JSON.stringify(item.textAttr) ===
                            JSON.stringify(defaultTextAttr) &&
                          JSON.stringify(item.swatchAttr) ===
                            JSON.stringify(defaultSwatchAttr)
                      );

                      if (existingProductIndex !== -1) {
                        const updatedCart = [...flattenedPrev];
                        updatedCart[existingProductIndex].quantity += 1;
                        localStorage.setItem(
                          "CartList",
                          JSON.stringify(updatedCart)
                        );
                        setProductDetails(updatedCart);
                      } else {
                        const newProduct: Details = {
                          id: product.id,
                          name: product.name,
                          price: product.price[0].amount,
                          currency: product.price[0].currency[0].symbol,
                          image: product.gallery[0].imageUrl,
                          textAttr: defaultTextAttr,
                          swatchAttr: defaultSwatchAttr,
                          allTextAttr: product.textAttribute,
                          allSwatchAttr: product.swatchAttribute,
                          quantity: 1,
                        };

                        const updatedCart = [...flattenedPrev, newProduct];
                        localStorage.setItem(
                          "CartList",
                          JSON.stringify(updatedCart)
                        );
                        setProductDetails(updatedCart);
                      }
                    }
                  }}
                  className="group-hover:flex hidden  hover:bg-green-500 cursor-pointer h-[52px] w-[52px] bg-[#5ece7b] rounded-full  relative bottom-33 flex items-center justify-center left-75"
                >
                  <svg
                    className=""
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32.402 32"
                  >
                    <path d="M6 30a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0zm18 0a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0zM-.058 5a1 1 0 0 0 1 1H3.02l1.242 5.312L6 20c0 .072.034.134.042.204l-1.018 4.58A.997.997 0 0 0 6 26h22.688a1 1 0 0 0 0-2H7.248l.458-2.06c.1.016.19.06.294.06h18.23c1.104 0 1.77-.218 2.302-1.5l3.248-9.964C32.344 8.75 31.106 8 30 8H6c-.156 0-.292.054-.438.088l-.776-3.316A1 1 0 0 0 3.812 4H.942a1 1 0 0 0-1 1zm6.098 5h23.81l-3.192 9.798c-.038.086-.07.148-.094.19-.066.006-.17.012-.334.012H8v-.198l-.038-.194L6.04 10z"></path>
                  </svg>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Cart
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        children={undefined}
      />
    </section>
  );
};

export default AllProducts;
