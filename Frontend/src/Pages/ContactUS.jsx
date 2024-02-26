import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer';
import Contact from './../Components/Contact/Contact';

function ContactUS() {
  document.title = 'ShopLand || Contact us'
  return (
    <div>
        <Navbar/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ContactUS