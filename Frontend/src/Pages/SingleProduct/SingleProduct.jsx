import React, { useEffect } from 'react';
import './SingleProduct.css';
import '../../assets/CSS/Common.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import spinner from '../../assets/Img/spinner.gif';
import { Link, useParams } from 'react-router-dom';
import { useProductContext } from '../../ContextAPI/ProductContext';
import AddToCart from '../../Components/Add-To-Cart/AddToCart';
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

function SingleProduct() {
  const {id} = useParams();

  const {GetSingleProduct, singleProducts, isSingleLoading} = useProductContext();
 
  const {image, company, description, name, MRP, price, reviews, stock} = singleProducts;

  useEffect(()=>{
    GetSingleProduct(`https://react-e-commerce-backend-i8qa.onrender.com/get-product/${id}`)
  }, []);

  document.title = 'ShopLand || ' + name

  if(isSingleLoading){
      return (
          <div className='loader'>
              <img src={spinner} alt="shopland e-commerce website's spinner" />
          </div>
      )
  }
  return (
    <>
      <Navbar/>
      <div className="container">
          <h4 className='navigation'>
              <Link to='/'>Home</Link>/<span>{name}</span>
          </h4>
          <div className="row">
              {/* ----- img section starting ----- */}
              <div className="col-lg-6 border single-product-img">
                  <img src={image} alt={name} />
              </div>
              {/* ----- img section ending ----- */}

              {/* ----- product-details section starting ----- */}
              <div className="col-lg-6 border pt-2 pb-3 product-details">
                  <h3>{name}</h3>
                  <div className='currency'>
                      <div>
                        <span className='MRP'>MRP: </span>
                        <del>
                            { MRP }
                        </del>
                      </div>
                      <p className='m-0'>Deal of the day: ৳{price}</p>
                      <div className='m-0 mb-2 text-warning'>
                          <MdOutlineStar/>
                          <MdOutlineStar/>
                          <MdOutlineStar/>
                          <MdOutlineStarHalf/>
                          <MdOutlineStarBorder/>
                      </div>
                  </div>
                  <p className='single-product-des'>{description}</p>
                  <p className='brand_id'>Available: <span>{stock > 0 ? 'IN Stock' : 'Not Available'}</span></p>
                  <p className='brand_id'>Brand: <span> {company}</span></p>
                  <hr className='single-pro-hr' />
                  <div>
                      {
                        stock > 0 && <AddToCart singleProducts={singleProducts} />
                      }
                  </div>
              </div>
              {/* ----- product-details section ending ----- */}
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default SingleProduct;