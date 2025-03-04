
// @ts-ignore
import { useEffect, useState } from 'react';
import { client, GET_CATEGORIES } from '../constants/index';

interface CartProps {
  isOpen: boolean;
  onClose: any;
  children: any;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {  
  if(!isOpen) return null
  type Details = {
    name?: string;
    price?: number;
    currency? :string;
    image?: string;
    swatchAttr?: string;
    textAttr?: any
  };
  
  const [productDetails, setProductDetails] = useState<Details[]>([]);

  useEffect(() => {
    //localStorage.clear()
    const cartData = JSON.parse(localStorage.getItem("Cart") || "[]");
  
    if (Array.isArray(cartData)) {
      const flattenedCart = cartData.flat(Infinity)
      setProductDetails(flattenedCart);
    }
  }, []);
  console.log(productDetails)
  
    return (
      <div className="fixed top-[88px] inset-0 flex justify-end z-50 ">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" onClick={onClose}></div>

        {/* Modal Content */}
        <div className="relative z-10 bg-white p-6 h-[300px] shadow-lg w-[300px] right-15">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={onClose}
          >
            &times;
          </button>

          {/* Modal Body */}
          <div className='flex  items-start'>
            <div className='flex'>
            <ul>
              {productDetails.map((item:any, index) => (
                <li key={index}>
                  {item.name} - {item.price?.[0]?.amount} {item.price?.[0]?.currency?.[0]?.symbol}
                  <ul>
      
        </ul>
                </li>
                  ))}
            </ul>

            </div>

          </div>
         
        </div>
    </div>
    );
  }
      

export default Cart;
