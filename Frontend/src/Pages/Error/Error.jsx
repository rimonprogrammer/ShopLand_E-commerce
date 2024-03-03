import React from 'react';
import './Error.css';
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

function Error() {
  document.title = 'ShopLand || Error page'
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className='error-content'>
                <h1>404</h1>
                <h3>Uff! You are Lost.</h3>
                <p>This page you are looking for does not exist. But you can click the button to go back to the homepage</p>
                <Link to='/' className='error-link'>
                    <button>Home</button>
                </Link>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Error