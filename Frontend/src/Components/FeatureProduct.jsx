import React from 'react';
import '../assets/CSS/Common.css';
import { Link } from 'react-router-dom';
import spinner from '../assets/Img/spinner.gif';

function FeatureProduct({featuredProduct, isLoading}) {
    if(isLoading){
        return (
            <div className='loader'>
                <img src={spinner} alt="shopland e-commerce website's spinner" />
            </div>
        )
    }
  return (
    <div className='container'>
        <h3 className='text-center mt-5'>Feature Product</h3>
        <p className='text-center'>Check & Get Your Desired Product!</p>
        <div className="product">
            <div className='all-products'>
                {
                    featuredProduct.map((element, index) =>{
                        const {id, image, company, name, price, description} = element;
                        return(
                           <Link className='product-card' to={`/SingleProduct/${id}`} key={index}>
                                <p className='company'><b>Brand: </b>{company} </p>
                                <div className='product-img'>
                                    <div className='btn-overflow'></div>
                                    <img src={image} alt={name} />
                                </div>
                                <div className='name-price'>
                                    <h3>{name}</h3>
                                    <p>{price + '৳'}</p>
                                </div>
                                <p className='description'>{description ? description.slice(0,50) + '...' : description}</p>
                           </Link>
                        )
                    }) 
                }
            </div>
        </div>
    </div>
  )
}

export default FeatureProduct;