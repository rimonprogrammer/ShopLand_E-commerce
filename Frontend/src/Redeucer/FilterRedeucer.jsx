
const reducer = (state, action) =>{
    let {all_products} = state;
    switch(action.type){
        case "LOAD_FILTER_PRODUCTS" :
            return {
                ...state,
                filter_Products : [...action.payload],
                all_products : [...action.payload],
            }
        
        //  sorting functionality starting ---
        case "GET_SORT_VALUE" :
            return{
                ...state,
                sorting_value : action.payload
            }
        case "SORTING_PRODUCT" :{
            let newSortData;
            let tempSortData = [...action.payload];

            if(state.sorting_value === 'hight'){
                const sortingProducts = (a, b) =>{
                    return b.price - a.price;
                }
                newSortData = tempSortData.sort(sortingProducts);
            }

            if(state.sorting_value === 'lowest'){
                const sortingProducts = (a, b) =>{
                    return a.price - b.price;
                }
                newSortData = tempSortData.sort(sortingProducts);
            }
            if(state.sorting_value === 'a-z'){
                newSortData = tempSortData.sort((a, b)=>{
                    return a.name.localeCompare(b.name);
                });
            }
            if(state.sorting_value === 'z-a'){
                newSortData = tempSortData.sort((a, b)=>{
                    return b.name.localeCompare(a.name);
                });
            }
            return{
                ...state,
                filter_Products : newSortData
            }
        }
    // ------- sorting functionality ending ------

    // ------- PRODUCT SEARCHING START ------
        case 'UPDATE_SEARCH_VALUE' :
            let tempFilterProduct = [...all_products];
        
            const searchResult = tempFilterProduct.filter((element)=>{
                return element.name.toLowerCase().includes(action.payload);
            })
            return{
                ...state,
                filter_Products : searchResult
            }

        // --- product category section starting ------
        case "PRODUCT_CATEGORY_VALUE":
            const { value } = action.payload;
            const btnValue = value.toLowerCase();

            let Category = [...all_products];
    
            let FilterCategory;
            FilterCategory = Category.filter((curElem) => {
                if(curElem.category){
                    return curElem.category.toLowerCase() === btnValue;
                }
                return curElem.company === btnValue;
            });
            
            if(value === 'All'){
                FilterCategory = Category;
            }
            return{
                ...state,
                filter_Products : FilterCategory
            }

        case "PRODUCT_COMPANY_VALUE" :
            const { CompanyValue } = action.payload;
            const CompanyBtnValue = CompanyValue.toLowerCase();

            let Company = [...all_products];

            let FilterCompany;
            FilterCompany = Company.filter((curElem) => {
                return curElem.company.toLowerCase() === CompanyBtnValue;
            });
            
            if(CompanyValue === 'All'){
                FilterCompany = Company;
            }
            return{
                ...state,
                filter_Products : FilterCompany
            }
        case "CLEAR_FILTER" :
            let clearFilter = [...all_products];
            return{
                ...state,
                filter_Products : clearFilter
            }
        // --- product category section starting ------

        default : 
            return state;
    }
}

export default reducer;