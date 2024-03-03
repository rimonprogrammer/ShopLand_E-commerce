import React from 'react';
import '../../assets/CSS/Common.css';

function AmountToggle({stock, amount, setIncrease, setDecrease}) {
  return (
    <div className='amount-toggle'>
        <button disabled={amount <= 1} onClick={setDecrease}>-</button>
        <p>{amount}</p>
        <button disabled={amount > stock } onClick={setIncrease}>+</button>
    </div>
  )
}

export default AmountToggle;