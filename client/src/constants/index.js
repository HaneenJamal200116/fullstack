import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

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
    }
  }
`;


export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
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
      swatchAttribute{
       items{
          displayValue
        }
      }
      textAttribute{
        items{
          displayValue
        }
      }
    }
  }
`;