import React from 'react';
import './Cart.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';
import { useCartContext } from '../../ContextAPI/Cart_Context';
import UserData from '../../Components/Cart/UserData';
import CartProduct from '../../Components/Cart/CartProduct';

function Cart() {
  const {cart, removeItem, clearCart, total_price, shipping_fee} = useCartContext();
  document.title = 'ShopLand || Cart'
  return (
    <div>
      <Navbar/>
      <UserData/>
      <CartProduct total_price={total_price} shipping_fee={shipping_fee} cart={cart} removeItem={removeItem} clearCart={clearCart} />
      <Footer/>
    </div>
  )
}

export default Cart