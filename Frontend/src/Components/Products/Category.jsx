import React from 'react';
import './ProductSetting.css';
import '../../assets/CSS/Common.css';

function Category({all_products, updateFilterValue, updateCompanyFilter, clear_filter, category}) {

    const getUniqueCategory = (data, property) =>{
        let newValue = data.map((element) =>{
            return element[property];
        });
        return newValue = ["All", ...new Set(newValue)];
    }

    const categoryData = getUniqueCategory(all_products, "category")
    const companyData = getUniqueCategory(all_products, "company")

    return (
    <div className='Category'>
        <h5 className='m-0'>Category:</h5>
        <hr className='mt-1 m-0' />
        <div className='catagoryFilter'>
            {
                categoryData.map((Pro_category, index) =>{
                    return( 
                        <button
                            key={index} 
                            value={Pro_category}
                            onClick={updateFilterValue}
                            type="button" 
                            name="category" 
                            id="category" 
                            className={`${Pro_category ===  category ? 'category-selected' : ''}`}
                        >
                            {Pro_category}
                        </button>
                    )
                })
            }
        </div>
        <div className='companyFilter'>
            <h5 className='mt-3 m-0'>Company:</h5>
            <hr className='mt-1 m-0' />
            <select onClick={updateCompanyFilter} className='w-100 mt-2' name="Company" id="Company">
                {
                    companyData.map((company, index) =>{
                        return(
                            <option 
                                key={index}
                                name='company' 
                                value={company}>
                                    {company}
                            </option>
                        )
                    })
                }
            </select>
        </div>
        <button 
            onClick={clear_filter} 
            className='clear-filter mt-4'
            type='button'
            name='clear_filter'
            value='clear_filter'
            >Clear Filters
            <i className='ms-1 fa-solid fa-check-double'></i>
        </button>
    </div>
  )
}

export default Category;