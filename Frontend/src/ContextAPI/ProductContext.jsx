import { useContext, useEffect, useReducer, createContext } from 'react';
import axios from 'axios';
import ProductRedeucer from '../Redeucer/ProductRedeucer';
import products from '../API';
const AppContext = createContext();

function ProductContext({children}) {

  // >>>>>>>>>>>>> ALL product fetching start <<<<<<<<<<<<<<<<<<<<
  // const API = 'https://react-e-commerce-backend-i8qa.onrender.com/get-product';
  const API = products

  const initialState = {
    isLoading : false,
    Products : [],

    isSingleLoading : false,
    singleProducts : {},
    featuredProduct : [],
    trendingProduct : []
  }
  const [state, dispatch] = useReducer(ProductRedeucer, initialState);

  const GetProdct = async (url) =>{
      dispatch({type : "SET_LOADING"});
      try {
          // const res = await axios.get(url);
          // const data = await res.data;

          const data = url;

          dispatch({type : "SET_API_DATA", payload : data})
      } catch (error) {
          console.log(error)
      }
  }
  useEffect(()=>{
      GetProdct(API);
  },[])
  // >>>>>>>>>>>>> ALL product fetching end <<<<<<<<<<<<<<<<<<<<


  // >>>>>>>>>>>>> Single product fetching start <<<<<<<<<<<<<<<<<<<<
  const GetSingleProduct = async (url) =>{
    dispatch({type : "SET_SINGLE_LOADING"});
    try {
        const res = await axios.get(url);
        const SingleProduct = await res.data;
        dispatch({type : "SET_SINGLE_PRODUCT", payload : SingleProduct});
        
    } catch (error) {
        console.log(error)
    }
  }
  // >>>>>>>>>>>>> Single product fetching start <<<<<<<<<<<<<<<<<<<<
  

  return (
    <AppContext.Provider value={{...state, GetSingleProduct}}>
        {children}
    </AppContext.Provider>
  )
}

const useProductContext = () =>{
  return useContext(AppContext);
}
export {ProductContext, useProductContext};

