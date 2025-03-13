import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css'


import Navbar from './sections/Navbar'
import AllProducts from './sections/AllProducts'

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import TechProducts from './sections/TechProducts'
import ClothingProducts from './sections/ClothesProducts'
import ProductDetail from './sections/ProductDetails'

const client = new ApolloClient({
  uri: "https://backend-hj.great-site.net/graphql",
  cache : new InMemoryCache(),
  credentials: "include", 
})


function App() {
  return(
    <>
      <ApolloProvider client={client}>
      <Router>
      <Navbar /> 
      <Routes>
      <Route path="/" />
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
