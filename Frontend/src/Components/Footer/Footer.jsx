import React from 'react';
import './Footer.css';
import logo from '../../assets/Img/logo.png';
import { Link } from 'react-router-dom';
import { useFilterContext } from '../../ContextAPI/FilterContext';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
    const { updateFilterValue, SearchProduct} = useFilterContext(); 

    const date = new Date();
    const year = date.getFullYear();

  return (
    <footer className='footer'>
        <div className="container">
            <div className="row">
                <div className="col-md-3 footer-box">
                    <div className='footer-brand'>
                        <Link to='/' className='footer-link'> 
                            <img src={logo} alt="ShopLand logo" />
                            <h4>Shop<span>Land</span></h4>
                        </Link>
                    </div>
                    <p>ShopLand is best online shopping store in Bangladesh that features 10+ million products at affordable prices. As bangaldesh's online shopping landscape is expanding every year, online shopping in dhaka, chittagong, khulna, sylhet and other big cities are also gaining momentum.  </p>
                </div>
                <div className="col-md-1 footer-box">
                    <h4>Menu</h4>
                    <ul className='footer-menu-box'>
                        <li>
                            <Link to='/AboutUS' className='footer-menu'> About-US </Link>
                        </li>
                        <li>
                            <Link to='/ContactUS' className='footer-menu'> Contact-US </Link>
                        </li>
                        <li>
                            <Link className='footer-menu'>Privacy policy</Link>
                        </li>
                        <li>
                            <Link to='/Cart' className='footer-menu'>Your Cart</Link>
                        </li>
                        <li>
                            <Link className='footer-menu'>Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 footer-box footer-category ">
                    <h4>Category</h4>
                    <ul className=''>
                        {
                            category.map((category, index) =>{
                                return(
                                    <Link key={index} to='/Products' className='footer-link'>
                                        <button
                                            value={category.title}
                                            onClick={updateFilterValue}
                                            type="button" 
                                            name="category" 
                                            id="category"  
                                        >
                                            {category.title}
                                        </button>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="col-md-3 footer-box tranding-product">
                    <h4>Tranding Product</h4>
                    <ul>
                    {
                            trendingProduct.map((category, index) =>{
                                return(
                                    <Link key={index} to='/Products' className='footer-link'>
                                        <button
                                            value={category.title}
                                            onClick={SearchProduct}
                                            type="button" 
                                            name="category" 
                                            id="category"  
                                        >
                                            {category.title}
                                        </button>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="col-md-3 footer-box pb-2">
                    <h4>Contact</h4>
                    <ul>
                        <li>
                            <FaLocationDot className='footer-contact-icons' />
                            <p>Address: Kumarkhali, Kushtia, Bangladesh</p>
                        </li>
                        <li>
                            <IoCall className='footer-contact-icons' />
                            <p>Pone/WhatsApp: 01313687347</p>
                        </li>
                        <li>
                            <MdMarkEmailRead className='footer-contact-icons' />
                            <p>Email: rahitulislam213@gmail.com</p>
                        </li>
                    </ul>
                    <h6>Follow US</h6>
                    <ul className='footer-social'>
                        <li>
                            <a href="https://www.linkedin.com/in/nobenur-islam-rimon/" target='_blank'>
                                <FaLinkedin className='footer-social-icons' />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/programmerrimon" target='_blank'>
                                <FaTwitter className='footer-social-icons' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/rimonprogrammer/" target='_blank'>
                                <FaFacebook className='footer-social-icons' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/rimonprogrammer//" target='_blank'>
                                <FaInstagramSquare className='footer-social-icons' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <p className='m-0 text-center copyright'>&copy; Copyright {year} || all right reserved by ShopLand BD</p>
    </footer>
  )
}

export default Footer;


const category = [
    {
        title : "Computer"
    },
    {
        title : "Laptop"
    },
    {
        title : "Mouse"
    },
    {
        title : "Keyboard"
    },
    {
        title : "Mobile"
    },
    {
        title : "Headphone"
    },
];

const trendingProduct = [
    {
        title : "T-Wolf V6 Gaming Design RGB Mouse"
    },
    {
        title : "Thermaltake X1 RGB Keyboard"
    },
    {
        title : "Gaming PC 16gb, 64gb"
    },
    {
        title : "MacBook Pro Overhaul"
    },
    {
        title : "EKSA E7000 Gaming Headphone"
    }
]