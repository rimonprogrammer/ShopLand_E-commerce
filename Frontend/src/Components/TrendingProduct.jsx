import React from 'react'
import { Link } from 'react-router-dom';

function TrendingProduct({trendingProduct}) {

  return (
    <div className='container mt-5 pt-5 pb-5'>
        <h3 className='text-center'>Trending Product</h3>
        <p className='text-center'>Check & Get Your Desired Product!</p>
        <div className="product">
            <div className='all-products'>
                {
                    trendingProduct.map((element, index) =>{
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

export default TrendingProduct