import React from 'react';
import '../../assets/CSS/Common.css';
import './ListView.css';
import { Link } from 'react-router-dom';

function ListView({filter_Products}) {

  return (
    <div className='ListView container p-0'>
        {
            filter_Products.map((product) =>{
                const {id, image, name, price, description} = product;
                return(
                    <Link className='product-list-view' to={`/SingleProduct/${id}`} key={id}>
                        <div className="row list-view-product">
                            <div className="col-md-4 list-view-img">
                                <img src={image} alt={name} />
                            </div>
                            <div className="col-md-8 product-details-text">
                                <h4>{name}</h4>
                                <span>{price}৳</span>
                                <p className='ps-1 m-0'></p>
                                <p>{description.slice(0, 140) + '...'}</p>
                                <button> View Details</button>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default ListView