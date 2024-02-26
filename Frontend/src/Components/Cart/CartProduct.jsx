import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

function CartProduct({cart, removeItem, clearCart, total_price, shipping_fee}) {
    if(cart.length === 0){
        return( 
            <div className='empty-cart'>
                <h1>No cart in the cart</h1>
            </div>
        )
    }

  return (
    <div className='container mt-3'>
        <div className='all-cart-product'>
            <table>
                <tr>
                    <th>Item</th>
                    <th className='price'>Price</th>
                    <th>Quantity</th>
                    <th className='price'>Subtotal</th>
                    <th>Action</th>
                </tr>
                <tbody>
                    {
                        cart.map((element) =>{
                            const {name, image, id, price, amount} = element;

                            return(
                                <tr key={element.id}>
                                    <td className='product-cart-img'>
                                        <div>
                                            <img src={image} alt={name} />
                                            <div>
                                                <p className='cart-name'>{name}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='price'>{price}৳</td>
                                    <td>
                                        {amount}
                                    </td>
                                    <td className='price'>{price * amount}৳ </td>
                                    <td className='action'>
                                        <MdDelete className='delete-icon' onClick={()=> removeItem(id)} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                
            </table>
            <div className="shopping">
                <Link to='/Order' className='order'>
                    <button onClick={()=> Order(cart, total_price, shipping_fee)}>Continue Shop</button>
                </Link>
                <button onClick={clearCart}>Clear Cart</button>
            </div>
            <div className='cost-section'>
                <div>
                    <div>
                        <p>Subtotal:</p>
                        <p>{total_price}৳</p>
                    </div>
                    <div>
                        <p>Shipping fee:</p>
                        <p>{shipping_fee}৳</p>
                    </div>
                    <hr className='mt-1'/>
                    <div className='mt-1'>
                        <p>Order total:</p>
                        <p>{total_price + shipping_fee}৳</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartProduct