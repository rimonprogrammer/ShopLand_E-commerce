import React, { useContext, useReducer, createContext, useEffect } from 'react';
import reducer from '../Redeucer/Cart_Reducer';

const CartContext = createContext();


function Cart_Provider({children}) {

    const getlocalData = () =>{
        let localData = localStorage.getItem('ShopLand');

        if(localData === null){
            return [];
        }
        else{
            return JSON.parse(localData)
        }
    }
    const initialState = {
        cart : getlocalData(),
        total_item : [],
        total_price : 0,
        shipping_fee : 150
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, amount, singleProducts ) => {
        dispatch({type : 'ADD_TO_CART', payload : {id, amount, singleProducts}})
    }

    // remove the items in the cart
    const removeItem = (id) =>{
        dispatch({type : 'REMOVE_ITEM', payload : id})
    }

    // clear the cart
    const clearCart = () =>{
        dispatch({type : 'CLEAR_CART'})
    }

    // add the data in the local storage
    useEffect(()=>{
        dispatch({type : 'CART_TOTAL_ITEM'});
        dispatch({type : 'CART_TOTAL_PRICE'});
        localStorage.setItem('ShopLand', JSON.stringify(state.cart));
    }, [state.cart]);

  return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart}}>
        {children}
  </CartContext.Provider>
}

const useCartContext = () =>{
    return useContext(CartContext)
}
export {Cart_Provider, useCartContext};