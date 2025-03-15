
// @ts-ignore
import { useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'
// @ts-ignore
import { client, PLACE_ORDER } from '../constants/index'

interface CartProps {
  isOpen: boolean
  onClose: any
  children: any
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => { 

  
  
  if(!isOpen) return null
  
  type Details = {
    id?: string
    name?: string
    price?: number
    currency? :string
    image?: string
    swatchAttr?: string
    textAttr?: any
    allTextAttr?:any
    allSwatchAttr?:any
    quantity:number
  }
  const [itemCount, setItemCount] = useState( 0)
  const [productDetails, setProductDetails] = useState<Details[]>([])
  const [placeOrder] = useMutation(PLACE_ORDER)

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("CartList") || "[]")
  
    if (Array.isArray(cartData)) {
      const flattenedCart = cartData.flat(Infinity)
      setProductDetails(flattenedCart)
    
      
    }
    setItemCount(parseInt(localStorage.getItem("CartTotalItems") || "0"))
  }, [])

  //console.log('cart',localStorage.getItem("CartTotalItems"))
  
  const handleOrder =  () => {
    try {
      for (const item of productDetails) {
        console.log("textAttr:", item.textAttr)
  
        const formattedText = Object.entries(item.textAttr || {})
          .map(([key, value]) => `${key}: ${value}`)
          .join(", ")
  
        console.log("Formatted String:", formattedText)

        const formattedSwatch = Object.entries(item.swatchAttr || {})
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ")

      console.log("Formatted String:", formattedSwatch)
  
        const response =  placeOrder({
          variables: {
            productId: item.id,
            productName: item.name,
            quantity: item.quantity,
            price: item.price,
            attributes: formattedText +" " + formattedSwatch,
          },
        })
        console.log("Order Response:", response)
        setProductDetails([])
        localStorage.setItem("CartList", JSON.stringify([]))
        setItemCount(0)
        localStorage.setItem("CartTotalItems","0" )
        window.dispatchEvent(new Event("storage"))

    
      }
    } catch (err) {
      console.error("Order Failed:", err)
    }
  }
  
  let sum : number=0

  if(productDetails.length>0 ){
    productDetails.forEach((item)=>{
     {
      if(item.price){
        sum+=item.price * item.quantity
      }
  
     }
  })

  }


  return (
      <div  className="fixed top-[88px] inset-0 flex justify-end z-50 ">
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 " onClick={onClose}></div>

        {/* Modal Content */}
        <div className="relative z-10 bg-white p-6  max-h-[500px] overflow-auto  shadow-lg w-[400px] right-15">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={onClose}
          >
            &times
          </button>

          {/* Modal Body */}
          <div className=' '>
            <div className='flex relative left-0'>
              <p className='font-bold mr-3 mb-3'>My Bag,</p> <p data-testid='cart-item-amount' className='mr-1'>{itemCount} </p>
             {(itemCount>1?<>items</>:<>item</>)} 
            </div>

            <ul className=''>
                {productDetails.map((item: any, index) => (
                  // Card
                  <li
                   className='flex justify-between items-center py-2 ' key={index}>
                    <div className='flex-1 text-start  '>
                      <p className='font-light text-lg mb-'>{item.name}</p> 
                      <p className='font-medium mb-3'>{item.currency}{(item.price * item.quantity).toFixed(2)}
                  
                      </p> 
                       {item.allTextAttr?.map((attr: any, attrIndex: number) => (
                          <p  data-testid={`cart-item-attribute-${attr.name.replace(/\s+/g, '-').toLowerCase()}`} 
                              className='mb-2' key={attrIndex}>
                            <p className='text-sm'>{attr.name}:</p>
                            <div className='flex'>
                            {attr.items.map((i: any) => <div  data-testid={`cart-item-attribute-${attr.name.replace(/\s+/g, '-').toLowerCase()}-${i.value.replace(/\s+/g, '-').toLowerCase()}${item.textAttr[attr.name] === i.value ? '-selected' : ''}`}
                            className={`mr-2 text-xs mb-1 border p-1 ${item.textAttr[attr.name]==i.value ?
                              'bg-black text-white': ''
                                  }`}>{i.value} </div>)}
                              </div>
                            </p>                         
                        ))}
                        {item.allSwatchAttr?.map((attr: any, attrIndex: number) => (
                            <p className='mb-2' key={attrIndex}>
                              <p>{attr.name}:</p>
                                <div className='flex flex-wrap'>
                                  {attr.items.map((i: any) => 
                                    <div style={{backgroundColor:i.value}} 
                                    data-testid={`cart-item-attribute-${attr.name.replace(/\s+/g, '-').toLowerCase()}-${i.value.replace(/\s+/g, '-').toLowerCase()}${item.swatchAttr[attr.name] === i.value ? '-selected' : ''}`}
                                        className={`mr-2 mb-1 h-[17px] w-[17px] border p-1   text-sm
                                          ${item.swatchAttr[attr.name] === i.value && 'ring-2 ring-[#5ECE7B] ring-offset-2'}`}>
 
                                    </div>)}
                                </div>
                            </p>
                          ))}
                    </div>
                    <div className='flex flex-col flex-1  h-[160px] justify-between items-center text-[24px] mt-2 mb-3'>
                     <button 
                     data-testid='cart-item-amount-increase'
                      onClick={()=>{
                        const updatedCart = [...productDetails]
                        updatedCart[index].quantity += 1 
                        localStorage.setItem("CartList", JSON.stringify(updatedCart))
                        setProductDetails(updatedCart)
                        const newTotalItems = itemCount + 1 
                        setItemCount(newTotalItems)
                        localStorage.setItem("CartTotalItems", newTotalItems.toString())
                        

                        window.dispatchEvent(new Event("storage"))
                      }}
                      className='cursor-pointer flex justify-center items-center text-[32px] border-1 border-[#1D1F22] h-6 w-6 hover:bg-gray-200'>+</button>
                      
                       {item.quantity}
                     <button  data-testid='cart-item-amount-decrease'
                     onClick={()=>{
                      const updatedCart = [...productDetails]
                      if(item.quantity===1){
                        updatedCart.splice(index,1)
                      }
                      else{
                        updatedCart[index].quantity -= 1 
                      }
                      localStorage.setItem("CartList", JSON.stringify(updatedCart))
                      setProductDetails(updatedCart) 
                      const newTotalItems = itemCount - 1 
                      setItemCount(newTotalItems)
                      localStorage.setItem("CartTotalItems", newTotalItems.toString())
                      

                      window.dispatchEvent(new Event("storage"))
                    
                     }}
                     className='cursor-pointer flex justify-center items-center text-[32px] border-1 border-[#1D1F22] h-6 w-6 hover:bg-gray-200'>-</button>
                    </div>  
                    <div className='ml-auto '>
                     <img className="h-[120px] w-[80px] object-cover" src={item.image} alt={item.name}/> 
                    </div>     
                 
            
                  </li>
                ))}
            </ul>
            <div className='flex justify-between font-medium mt-8 font-[#1D1F22]'>
              <p  className='total'>Total:</p><p data-testid='cart-total'>${sum.toFixed(2)}</p>
            </div>
          
            <button 
            className={`mt-5 text-white h-[43px] w-full font-semibold
              ${productDetails.length>0
                ? 'bg-[#5ECE7B] cursor-pointer hover:bg-green-500':'bg-gray-400 '
              }
              font-[#1D1F22]`}
            onClick={(handleOrder)}>
              Place Order
            </button>
            
          
          </div>
         
        </div>
    </div>
    )
  }
      

export default Cart
