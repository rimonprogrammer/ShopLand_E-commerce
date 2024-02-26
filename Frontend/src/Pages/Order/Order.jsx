import React from 'react';
import './Order.css';
import '../../Authentication/Authentication.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useCartContext } from '../../ContextAPI/Cart_Context';
import { Link } from 'react-router-dom';

function Order() {
  const {cart, total_price, shipping_fee} = useCartContext();
  document.title = 'ShopLand || Order'
  return (
    <>
        <Navbar/>
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <table className='order-table bg-light'>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                        </tr>
                        <tbody>
                            {
                                cart.map((element) =>{
                                    const {name, image, amount} = element;

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
                                            <td>
                                                {amount}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        <p className='p-2'>Total cost: {total_price + shipping_fee}</p>
                        <Link to='/Cart'>
                            <button className='back-btn'>Back</button>
                        </Link>
                    </table>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <form action='https://formspree.io/f/mrgnebdq' method='POST' className='order-form'>
                        <p className='m-0'>Get order</p>

                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder='Your name' required autoFocus />

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder='Your email' required/>

                        <label htmlFor="phone">Phone</label>
                        <input type="number" name="phone" placeholder='Your phone number' required/>

                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" placeholder='Your address' required/>

                        <button type='submit' className='w-100 mt-3'>Submit Order</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Order;