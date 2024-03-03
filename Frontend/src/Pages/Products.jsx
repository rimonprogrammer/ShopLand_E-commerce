import React, { useState } from 'react';
// import '../Components/CSS/Common.css'; 
import '../Components/Products/Product.css';
import '../Components/Products/ProductSetting.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { useFilterContext } from '../ContextAPI/FilterContext';
import Product from '../Components/Products/Product';
import ListView from '../Components/Products/ListView';
import Sorting from '../Components/Products/Sorting';
import Category from '../Components/Products/Category';
import { MdGridView } from "react-icons/md";
import { MdViewList } from "react-icons/md";

function Products() {
    document.title = 'ShopLand || Products'
    const {
        filter_Products, 
        all_products, 
        sorting, 
        updateFilterValue,
        updateCompanyFilter, 
        clear_filter,
        category
    } = useFilterContext();  // all product's will be come through this custom hooks

    // listView & gridView section staring
    const [ProductView, setProductView] = useState(true);
    const [GridViewIcon, setGridViewIcon] = useState('Product_ViewIcon');
    const [ListViewIcon, setListViewIcon] = useState('');

    const listView = () =>{
        setProductView(false);
        setListViewIcon('Product_ViewIcon')
        setGridViewIcon('');

    }
    const gridView = () =>{
        setProductView(true);
        setGridViewIcon('Product_ViewIcon');
        setListViewIcon('');
    }
    // listView & gridView section ending
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col-lg-2 product-sorting-aria  p-0">
                <div className='product-sorting border'>
                    <Category 
                        updateFilterValue={updateFilterValue} 
                        updateCompanyFilter={updateCompanyFilter} 
                        all_products={all_products} 
                        clear_filter={clear_filter}
                        category={category}
                    />
                </div>
               
            </div>
            <div className="col-lg-10 border">
                <div className="row border-bottom border all-product-header">
                    <div className="col-4 product-view">
                        <MdGridView onClick={gridView} className={`${GridViewIcon} view-icon`} />
                        <MdViewList onClick={listView} className={`${ListViewIcon} view-icon`} />
                    </div>
                    <div className="col-4 total-product">
                        <span>{`${filter_Products.length}`} Product Available</span>
                    </div>
                    <div className="col-4 price-sorted">
                        <Sorting sorting={sorting} />
                    </div>
                </div>
                <div className='all-product-section ps-2 pt-2 rounded-2'>
                    {
                        ProductView === true ? 
                        <Product filter_Products={filter_Products} /> 
                        : <ListView filter_Products={filter_Products} />
                    }
                   
                </div>
            </div>
        </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Products;