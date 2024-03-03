import React, { useEffect, useState } from 'react';
import './Navbar.css';
import '../../assets/CSS/Common.css';
import logo from '../../assets/Img/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useFilterContext } from '../../ContextAPI/FilterContext';
import { useCartContext } from '../../ContextAPI/Cart_Context';
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const {SearchProduct, updateFilterValue} = useFilterContext();  // all product's will be come through this custom hooks
  const {total_item} = useCartContext();

  const location = useLocation();
  // --------- navbar bar show or hidden starting ----------
  const [barShow, setBarShow] = useState('NavBarShow');
  const [NavLink, setNavLink] = useState('');
  const [toggleBar, setToggleBar] = useState("FaBars")
  const toggleBarIcon = () =>{
    setBarShow(`${barShow === 'NavBarShow' ? 'NavBarHidden' : 'NavBarShow'}`);
    setNavLink(`${NavLink === '' ? 'text-dark' : ''}`);
    setToggleBar(toggleBar === "FaBars" ? "ImCross" : "FaBars")
  }
  // --------- navbar bar show or hidden ending ----------
  
  // ------ sticky navbar ------
  const [sticky, setSticky] = useState('');
  const [stickyTop, setStickyTop] = useState('');
  const Sticky = () =>{
    if(window.scrollY){
      setSticky('sticky-top')
      setStickyTop('sticky-top-header')
    }
    else{
      setSticky('')
      setStickyTop('')
    }
  }
  document.addEventListener('scroll', Sticky);
  // ------ sticky navbar ------

  const [userData, setUserData] = useState();
  useEffect(()=>{
      if(localStorage.getItem('UserInfo')){
          const data = JSON.parse(localStorage.getItem('UserInfo'))
          setUserData(data.name);
      }
    }, []);

    const navigate = useNavigate()
    const logout = () =>{
        localStorage.clear();
        navigate('/Login')
    }
  return (
    <div className='navbar-aria'>
      {/* >>>>>>>>>> header top section starting <<<<<<<<<<<<< */}
        <div className={`header-top-bg ${stickyTop}`}>
            <div className='container'>
                <div className="header-top">
                    <div className="header-logo d-flex">
                        <Link to='/' className='link'>
                            <img src={logo} alt="shopLand bd logo" />
                        </Link>
                        <form className="header-searchBox">
                            <input onChange={SearchProduct} type="text" name="search" id="search" className='border-0' placeholder='Search here...' autoFocus/>
                            <Link to='/Products' className='HomeSearchLink'>
                                <button type='submit'>
                                  Search
                                  <IoMdSearch className='ms-1' />
                                </button>
                            </Link>
                        </form>
                    </div>
                    <div className='header-userData'>
                        <Link to='/Cart' className='header-userData-icon'>
                            <button type="button" class="btn position-relative">
                                <FaCartShopping className='cart-icon' />
                                <span class="position-absolute translate-middle badge rounded-pill bg-danger">
                                {total_item}
                                </span>
                            </button>
                        </Link>
                        <div className='d-flex'>
                          {
                              userData ? 
                                  <button onClick={logout} className=' ms-2  me-2 authentication-btn'>
                                      <FaLockOpen className='me-1' />
                                      Logout
                                  </button> :
                                  <Link to='/Login' className='header-userData-icon ms-2 me-2'>
                                      <button className='mt-0 authentication-btn'>
                                          <FaUser className='me-1' />
                                          Login
                                      </button>
                                  </Link> 
                            }
                            <button onClick={toggleBarIcon} className='header-bar'>
                            {
                                  toggleBar === 'FaBars' ?
                                  <FaBars className='FaBars' />
                                  : <ImCross className='ImCross' />
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/* >>>>>>>>>> header top section ending <<<<<<<<<<<<< */}
 
      {/* >>>>>>>>>> header routine section starting <<<<<<<<<<<<< */}
        <div className={`header-routine ${sticky}`}>
            <nav className="navbar navbar-expand-lg container">
              <ul className={`navbar-nav ${barShow}`}>
                  <li className="nav-item">
                      <button className='category-btn'>
                          Feature Catagories
                          <FaArrowAltCircleDown className='ms-1' />
                      </button>
                  </li>
                  <li className="nav-item home">
                    <Link to='/' className={`nav-link ${NavLink} ${location.pathname === '/' ? 'nav-link-selected' : ''}`}>
                        Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/Products' className={`nav-link ${NavLink} ${location.pathname === '/Products' ? 'nav-link-selected' : ''}`}>
                       All Products
                    </Link>
                  </li>
                  {
                      menu.map((link, index) =>{
                        const {title} = link;
                          return(
                            <Link to='/Products' key={index} className='nav-item'>
                                <button
                                  className='nav-link'
                                    value={title}
                                    onClick={updateFilterValue}
                                    type="button" 
                                    name="category" 
                                    id="category" 
                                >
                                    {title}
                                </button>
                            </Link>
                          )
                      })
                  }
              </ul>
            </nav>
        </div>
      {/* >>>>>>>>>> header routine section ending <<<<<<<<<<<<< */}
    </div>
  )
}

export default Navbar;


const menu = [
    {
      title : "Computer"
    },
    {
      title : "Laptop"
    },
    {
      title : "Mobile"
    },
    {
      title : "Mouse"
    },
    {
      title : "Keyboard"
    },
    {
      title : "Camera"
    },
    {
      title : "Watch"
    },
    {
      title : "Headphone"
    },
    {
      title : "Monitor"
    },
    {
      title : "Printer"
    },
]