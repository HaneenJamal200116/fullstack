import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css'


import Navbar from './sections/Navbar'
import ProductListing from './sections/ProductListing'
import TechProducts from './sections/TechProducts'
import ClothesProducts from './sections/ClothesProducts'

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache : new InMemoryCache()
})


function App() {
  return(
    <>
      <ApolloProvider client={client}>
       <Navbar/>
       {/* <ProductListing/>
       <hr/>
       <TechProducts/>
       <hr/>
       <ClothesProducts/> */}
      </ApolloProvider>
    </>
  )
}

export default App
