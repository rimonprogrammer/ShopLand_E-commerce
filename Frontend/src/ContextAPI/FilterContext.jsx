import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { useProductContext } from './ProductContext';
import reducer from '../Redeucer/FilterRedeucer';

const FilterContext = createContext();

function FilterContextProvider({children}) {
    const {Products} = useProductContext();

    const initialState = {
        filter_Products : [],
        all_products : [],
        sorting_value : 'lowest',
    };
    const [state, dispatch] = useReducer(reducer, initialState);
  
    // >>>>>>> sorting functionality starting <<<<<<<<<
    const sorting = (event) =>{
        let Value = event.target.value;
        const userValue = Value.toLowerCase();
        
        dispatch({type : "GET_SORT_VALUE", payload : userValue});
    };

    // ------- PRODUCT SEARCHING & CATEGORY FILTER START ------
    const SearchProduct = (e) =>{
        const Value = e.target.value;
        const searchValue = Value.toLowerCase();

        dispatch({type : 'UPDATE_SEARCH_VALUE', payload : searchValue })
    }

    // category filter
    const [category, setCategory] = useState('All');
    const updateFilterValue = (e) =>{   // category selected section
        const value = e.target.value;
        setCategory(value);
        
        dispatch({type : 'PRODUCT_CATEGORY_VALUE', payload : { value} });

        return value;
    }

    // company filter
    const updateCompanyFilter = (e) =>{
        const CompanyValue = e.target.value;
    
        dispatch({type : 'PRODUCT_COMPANY_VALUE', payload : { CompanyValue } })
    }
    const clear_filter = () =>{
        dispatch({ type: "CLEAR_FILTER" });
    }
    // ------- PRODUCT SEARCHING END ------
    useEffect(()=>{ 
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({type : "SORTING_PRODUCT", payload : Products});
    }, [state.sorting_value, state.filters]);
    // >>>>>>> sorting functionality ending <<<<<<<<<

    useEffect(()=>{
        dispatch({type : "LOAD_FILTER_PRODUCTS", payload : Products});
    }, [Products]);
  // >>>>>>> home page searchBox <<<<<<<<<


    return (
        <FilterContext.Provider 
            value={{
                ...state, 
                updateFilterValue, 
                updateCompanyFilter,
                sorting, 
                SearchProduct, 
                clear_filter,
                category
            }}>
            {children}
        </FilterContext.Provider>
  )
}

const useFilterContext = () =>{
    return useContext(FilterContext);
}
export {FilterContextProvider, useFilterContext};