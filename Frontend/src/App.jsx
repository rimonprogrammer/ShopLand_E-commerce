import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import AboutUS from './Pages/AboutUS';
import ContactUS from "./Pages/ContactUS";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Pages/Cart/Cart";
import Login from './Authentication/Login';
import SignUP from "./Authentication/SignUP";
import Order from "./Pages/Order/Order";
import Error from './Pages/Error/Error';

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/AboutUS" element={<AboutUS/>} />
          <Route path="/ContactUS" element={<ContactUS/>} />
          <Route path="/SingleProduct/:id" element={<SingleProduct/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignUP" element={<SignUP/>} />
          <Route path="/Order" element={<Order/>} />
          <Route path="*" element={<Error/>} />
      </Routes>
  )
}

export default App;
