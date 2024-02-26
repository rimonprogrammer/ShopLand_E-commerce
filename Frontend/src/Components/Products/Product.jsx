import React from 'react';
import './Product.css';
import '../../assets/CSS/Common.css';
import spinner from '../../assets/Img/spinner.gif';
import { useProductContext } from '../../ContextAPI/ProductContext';
import { Link } from 'react-router-dom';

function Product({filter_Products}) {
    const {isLoading} = useProductContext();

    if(isLoading){
        return <div className='loader'>
            <img src={spinner} alt="shopland e-commerce website's spinner" />
        </div>
    }
  return (
    <div className='container'>
        <div className="product">
            <div className='all_product_page pb-4'>
                {
                    filter_Products.map((element, index) =>{

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

export default Product;