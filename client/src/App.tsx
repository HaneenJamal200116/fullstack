import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css'


import Navbar from './sections/Navbar'
import AllProducts from './sections/AllProducts'

import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom"
import TechProducts from './sections/TechProducts'
import ClothingProducts from './sections/ClothesProducts'
import ProductDetail from './sections/ProductDetails'
import Cart from './sections/Cart'
import { useState } from 'react'

// const client = new ApolloClient({
//   uri: "http://localhost:8000/graphql",
//   cache: new InMemoryCache(),
// });
export const client = new ApolloClient({
  uri: "https://antiquewhite-chough-841448.hostingersite.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return(
    <>
      <ApolloProvider client={client}>
      <Router>
      <Navbar /> 
      <Routes>
      <Route path="/" element={<Navigate to="/all" replace />} />
      <Route path="/all" element={<AllProducts />} />
      <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/tech" element={<TechProducts />} />
        <Route path="/clothes" element={<ClothingProducts />} />
        <Route path="/cart" element={<Cart isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} children={undefined} />} /> 
      </Routes>
    </Router>
       
      </ApolloProvider>
    </>
  )
}


export default App
