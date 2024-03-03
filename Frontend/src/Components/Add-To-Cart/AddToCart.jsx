import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/CSS/Common.css';
import { useCartContext } from '../../ContextAPI/Cart_Context';
import AmountToggle from './AmountToggle';

function AddToCart({singleProducts}) {
    const {addToCart} = useCartContext();

    const {id,  stock} = singleProducts;
   
    // --- increase and decrease --
    const [amount, setAmount] = useState(1);
    const setDecrease = () =>{
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () =>{
        amount <= stock ? setAmount(amount + 1) : setAmount(stock);
    }
    // --- increase and decrease --

  return (
    <div>
        <AmountToggle stock={stock} amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
        <Link 
            to='/Cart' 
            onClick={()=> addToCart(id, amount, singleProducts )}
        > 
            <button className='add-to-cart'>ADD To Cart</button>
        </Link>
    </div>
  )
}

export default AddToCart