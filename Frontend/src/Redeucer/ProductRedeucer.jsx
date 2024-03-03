const ProductRedeucer = (state, action) =>{
    switch(action.type){
        // all product starting --
        case "SET_LOADING":
            return{
                ...state,
                isLoading : true,
            }
        case "SET_API_DATA" :
            const featureProduct = action.payload.filter((product)=>{
                return product.featured === true;
            });

            const trendingProduct = action.payload.filter((product)=>{
                return product.trending === true;
            });

            return{
                ...state,
                isLoading : false,
                Products : action.payload,
                featuredProduct : featureProduct,
                trendingProduct : trendingProduct
            }
        // all product ending --

        // Single product starting --
        case "SET_SINGLE_LOADING":
            return{
                ...state,
                isSingleLoading : true,
            }
        case "SET_SINGLE_PRODUCT" : 
            return{
                ...state,
                isSingleLoading : false,
                singleProducts : action.payload
            }
        // Single product ending --

        default:
            return state
    }
}


export default ProductRedeucer;