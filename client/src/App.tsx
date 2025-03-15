import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css'


import Navbar from './sections/Navbar'
import AllProducts from './sections/AllProducts'

import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom"
import TechProducts from './sections/TechProducts'
import ClothingProducts from './sections/ClothesProducts'
import ProductDetail from './sections/ProductDetails'

const client = new ApolloClient({
  uri: "https://antiquewhite-chough-841448.hostingersite.com/graphql",
  cache: new InMemoryCache(),
});


function App() {
  return(
    <>
      <ApolloProvider client={client}>
      <Router>
      <Navbar /> 
      <Routes>
      <Route path="/" element={<Navigate to="/category/all" replace />} />
      <Route path="/category/all" element={<AllProducts />} />
      <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/tech" element={<TechProducts />} />
        <Route path="/category/clothes" element={<ClothingProducts />} />
      </Routes>
    </Router>
       
      </ApolloProvider>
    </>
  )
}


export default App
