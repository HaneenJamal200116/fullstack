import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://antiquewhite-chough-841448.hostingersite.com/graphql",
  cache: new InMemoryCache(),
});
// export const client = new ApolloClient({
//   uri: "http://localhost:8000/graphql",
//   cache: new InMemoryCache(),
// });



export const GET_CATEGORIES = gql`
  query {
    categories {
      id
      name
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query {
    products {
      id
      name
      description
      brand
      instock
      gallery{
        imageUrl
      }
      price{
        amount
        currency{
            symbol
        }
      }  
        attribute{
        name
       items{
           
          displayValue
          value
        }
      }
      swatchAttribute{
        name
       items{
          
          displayValue
          value
        }
      }
      textAttribute{
        name
        items{
          
          displayValue
          value
        }
      }
    }
  }
`;

export const GET_TECH_PRODUCTS = gql`
  query {
    techProducts {
           id
      name
      description
      brand
      instock
      gallery{
        imageUrl
      }
      price{
        amount
        currency{
            symbol
        }
      }  
        attribute{
        name
       items{
           
          displayValue
          value
        }
      }
      swatchAttribute{
        name
       items{
          
          displayValue
          value
        }
      }
      textAttribute{
        name
        items{
          
          displayValue
          value
        }
      }
    }
  }
`;


export const GET_CLOTHES_PRODUCTS = gql`
  query {
    clothingProducts {
            id
      name
      description
      brand
      instock
      gallery{
        imageUrl
      }
      price{
        amount
        currency{
            symbol
        }
      }  
        attribute{
        name
       items{
           
          displayValue
          value
        }
      }
      swatchAttribute{
        name
       items{
          
          displayValue
          value
        }
      }
      textAttribute{
        name
        items{
          
          displayValue
          value
        }
      }
    }
  }
`;


export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $name) {
      id
      name
      description
      brand
      instock
      gallery {
        imageUrl
      }
      price {
        amount
        currency {
          symbol
        }
      }
      attribute{
        name
       items{
           
          displayValue
          value
        }
      }
      swatchAttribute{
        name
       items{
          
          displayValue
          value
        }
      }
      textAttribute{
        name
        items{
          
          displayValue
          value
        }
      }
    }
  }
`;


export const PLACE_ORDER = gql`
  mutation CreateOrder($productId: String!,$productName: String! , $quantity: Int!, $price: Float! , $attributes: String) {
    createOrder(productId: $productId,productName: $productName ,quantity: $quantity, price: $price ,attributes: $attributes) {
      productId
      productName
      quantity
      price
      attributes
    }
  }
`;
