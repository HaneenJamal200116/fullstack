import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
// @ts-ignore
import { client, GET_PRODUCT } from '../constants/index'
import parse from 'html-react-parser'
import { Swiper, SwiperSlide } from "swiper/react"
// @ts-ignore
import "swiper/css"
// @ts-ignore
import "swiper/css/navigation"
// @ts-ignore
import "swiper/css/pagination"
import { Navigation } from "swiper/modules"
import { useEffect, useState } from "react"

const ProductDetail = () => {
  const { id } = useParams() 
  const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id }, client })
// @ts-ignore
  const [activeImage, setActiveImage] = useState<any >()
  const [currIndex,setCurrIndex]=useState(0)
  const [sAttribute,setSwatchAttribute]=useState<{ [key: string]: string }>({})
  const [txtAttribute, setTextAttribute] = useState<{ [key: string]: string }>({})
  const [itemCount, setItemCount] = useState(() => {
    return parseInt(localStorage.getItem("CartTotalItems") || '0')
  })

  console.log(localStorage.getItem("CartTotalItems"))

  type Details = {
    id?: string
    name?: string
    price?: number
    currency? :string
    image?: string
    swatchAttr?: any
    textAttr?: any
    allTextAttr:any
    allSwatchAttr:any
    quantity:number
  }
  
  const [productDetails, setProductDetails] = useState<Details[]>([])
  
  useEffect(() => {
    if (Object.keys(productDetails).length > 0) {
      localStorage.setItem("CartList", JSON.stringify([productDetails]))
    }
  }, [productDetails])
  
  useEffect(() => {
    if (data?.product) {
      console.log("Product Data:", data.product);
      console.log("Swatch Attributes:", data.product.swatchAttribute);
    }
  }, [data]);

  useEffect(() => {
    if (data?.product?.gallery?.length > 0) {
      setActiveImage(data.product.gallery[currIndex].imageUrl)
    }
    }, [data?.product])

  useEffect(() => {
    const handleStorageChange = () => {
      setItemCount(parseInt(localStorage.getItem("CartTotalItems") || '0'))
    }
    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])
  
  if (loading) return <p className="text-center text-2xl">Loading...</p>
  if (error) return <p className="text-center text-red-500 text-2xl">Error: {error.message}</p>

  if (!data || !data.product) return <p className="text-center text-2xl">Product not found</p>

  const product = data.product
  localStorage.setItem("CartTotalItems",itemCount.toString() )

  const Images=()=>{
    return (
      <div className="flex  flex-col max-h-[478px] overflow-y-auto  ">
      {product.gallery.map((image: { imageUrl: string }, index: number) => (
        <img 
          onClick={() => setCurrIndex(index)}
          key={index}
          className=" mb-3  h-[80px] w-[80px] object-cover border-1 border-gray-200 cursor-pointer" 
          src={image.imageUrl} alt={`Product image ${index + 1}`}  
         />
    ))}
  </div>
    )
  }

  const Slider =()=>{
    return (
      <div data-testid='product-gallery' className=" w-[541px]  min-h-[241px] max-h-[541px] overflow-auto ">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            loop
            initialSlide={currIndex} 
          
            >
            {product.gallery.map((image: { imageUrl: string }, index: number) => (
              <SwiperSlide   key={index}>
                <img  src={image.imageUrl}alt={`Product image ${index + 1}`} className="w-[541px] " />
                <button className="cursor-pointer custom-prev absolute bg-[#000000BA] h-[32px] w-[32px] text-white opacity-75 left-5 top-1/2 transform -translate-y-1/2 text-red-500">
                  ❮
                </button>
                <button className="cursor-pointer  custom-next absolute bg-[#000000BA] h-[32px] w-[32px] text-white opacity-75 right-5 top-1/2 transform -translate-y-1/2 text-red-500">
                  ❯
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
         
        </div>
    )
  }

  const isDisabled =
    (product.textAttribute.length > 0 &&
      Object.keys(txtAttribute).length < product.textAttribute.length) ||
    (product.swatchAttribute.length > 0 && !sAttribute) ||
    !product.instock

  const ProductDetails=()=>{
    return(
      <div className=" text-left  mt-5 w-[300px] ">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <div>
              {product.textAttribute.length > 0 && (
              product.textAttribute.map(
                (
                  attr: { name: string; items: { value: string }[] },
                  index: number
                ) => (
                  <div key={index}  data-testid={`product-attribute-${attr.name.replace(/\s+/g, '-').toLowerCase()}`}>
                    <div className="text-lg mt-5 attr font-bold">{attr.name}:</div>
                    <div className="flex flex-wrap" >
                      {attr.items.map((item, i) => (
                        <button
                          onClick={() =>
                            setTextAttribute((prev) => ({
                              ...prev,
                              [attr.name]: item.value,
                            }))
                          }
                          className={`mr-3 mb-1 border p-3 cursor-pointer ${
                            txtAttribute[attr.name] === item.value
                              ? 'bg-black text-white'
                              : ''
                          }`}
                          key={i}
                        >
                          {item.value}
                        </button>
                      ))}
                    </div>
                  </div>
                )
              )
            )}

            {product.swatchAttribute.length > 0 && (
                      
              <div data-testid="product-attribute-color">
                <div className="text-lg mt-5 attr font-bold">
                  {product.swatchAttribute[0].name}:
                </div>
                <div className="flex flex-wrap">
                  {product.swatchAttribute[0].items.map((item: any, i: number) => (
                    <button
                      data-testid={`product-attribute-color-${item.value}`}
                      onClick={() =>
                        setSwatchAttribute((prev) => ({
                          ...prev,
                          [product.swatchAttribute[0].name]: item.value,
                        }))
                      }
                      className={`mr-3 mb-3 h-[32px] w-[32px] p-3 cursor-pointer border-1 border-gray-400 ${
                        sAttribute[product.swatchAttribute[0].name] === item.value &&
                        'ring-2 ring-[#5ECE7B] ring-offset-2'
                      }`}
                      key={i}
                      style={{ backgroundColor: item.value }}
                    />
                  ))}
                </div>
              </div>
                    
            )}
          </div>


           

          <div className="text-lg mt-5 attr  font-bold ">PRICE:</div>
          <p className="text-2xl font-bold font-semibold mt-2">
            {product.price[0].currency[0].symbol}{product.price[0].amount}
          </p>  
          
          {/* Cart Button */}
          <div>
            <button
                disabled={isDisabled}
                onClick={()=>{
                  const newTotalItems = itemCount + 1 
                  setItemCount(newTotalItems)
                  localStorage.setItem("CartTotalItems", newTotalItems.toString())
                  

                  window.dispatchEvent(new Event("storage"))
                  const prev = JSON.parse(localStorage.getItem("CartList") || "[]")
                  if (Array.isArray(prev)) {
                    const flattenedPrev = prev.flat(Infinity)
                    const existingProductIndex = flattenedPrev.findIndex(
                      (item: Details) =>
                        item.name === product.name &&
                        JSON.stringify(item.textAttr) === JSON.stringify(txtAttribute)&&
                        JSON.stringify(item.swatchAttr) === JSON.stringify(sAttribute)

                    )
                    console.log(txtAttribute)
  
                    if(existingProductIndex !== -1){
                      const updatedCart = [...flattenedPrev]
                      updatedCart[existingProductIndex].quantity += 1 
                      localStorage.setItem("CartList", JSON.stringify(updatedCart))
                      setProductDetails(updatedCart)       
                    }
                    else{
                      const newProduct:Details= {
                        id: product.id,
                        name: product.name,
                        price:product.price[0].amount,
                        currency:product.price[0].currency[0].symbol,
                        image: product.gallery[0].imageUrl,
                        textAttr:txtAttribute,
                        swatchAttr:sAttribute,
                        allTextAttr:product.textAttribute,
                        allSwatchAttr:product.swatchAttribute,
                        quantity:1
                      }
                      
                      const updatedCart = [...flattenedPrev, newProduct]
                      localStorage.setItem("CartList", JSON.stringify(updatedCart))
                      setProductDetails(updatedCart)
  
                    }
           
                  }

                 
                }}
                data-testid='add-to-cart' 
                className={`mt-5 text-white h-[52px] w-[292px] font-semibold  ${
                  isDisabled
                    ? 'bg-gray-400 '
                    : 'bg-[#5ECE7B] cursor-pointer hover:bg-green-500'
                }`}
              >
                ADD TO CART
              </button>
          </div>


          {/* Product Description */}
          <div data-testid='product-description'  className="mt-4 max-h-[280px] overflow-y-auto   #1D1F22">
            {parse(product.description)}
          </div>

      
        </div>
    )
  }
  return (
    <section className="max-h-screen relative top-[50px] ">
      <div className="flex mt-5 ml-15 justify-between max-w-screen">
        {/*Left Images*/}
          <Images/>
        
        {/*Middle Slider */}
          <Slider/>
     
        {/* Product Details */}
          <ProductDetails/>
        
      </div>
    
    </section>
  )
}

export default ProductDetail