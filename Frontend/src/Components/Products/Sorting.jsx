import React from 'react';

function Sorting({sorting}) {
  return (
    <>
        <span className='sorting-by'>Sort By </span> 
        <select name="select" id="selectValue" onClick={sorting}>
            <option value="lowest">lowest</option>
            <option value="hight">Hight</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
        </select>
    </>
  )
}

export default Sorting;