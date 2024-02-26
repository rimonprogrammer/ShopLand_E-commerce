function Cart_Reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART' :
            let {id, amount, singleProducts} = action.payload
       
            let existProduct = state.cart.find((product) =>{
                return product.id === id
            })
            if(existProduct){ // start existProduct
                let updatedProduct = state.cart.map((currItem) =>{
 
                    if(currItem.id === id){  // start currItem.id === id
                        let newAmount = currItem.amount + amount; 

                        if(newAmount > currItem.stock){   // if the quantity is big then stock
                            const stock = currItem.stock;
        
                            return {
                                ...currItem,
                                amount : stock
                            }
                        }
                        else{
                            return {
                                ...currItem,
                                amount : newAmount
                            }
                        }
                    } // end currItem.id === id
                    else{
                        return currItem
                    }
                });
                return{
                    ...state,
                    cart : updatedProduct
                }
            } // end existProduct
         
            // if the product is not exist
            else{
                let cartProduct = {
                    name : singleProducts.name,
                    amount : amount,
                    image : singleProducts.image,
                    price : singleProducts.price,
                    stock : singleProducts.stock,
                    id : id
                }
                return{
                    ...state,
                    cart : [...state.cart, cartProduct]
                }
            } 
        // if the product is not exist


        // to delete just one cart
        case 'REMOVE_ITEM':
            let updatedCart = state.cart.filter((cart) =>{
                return cart.id !== action.payload
            })
            return{
                ...state,
                cart : updatedCart
            } 
        
         // to delete all the cart
        case 'CLEAR_CART' : 
            return{
                ...state,
                cart : []
            }
        
        // total cart item
        case 'CART_TOTAL_ITEM' :
            let updateValue = state.cart.reduce((initialValue, curElem)=>{
                let {amount} = curElem;
    
                initialValue = initialValue + amount;
                return initialValue;
            }, 0);
            return{
                ...state,
                total_item : updateValue
            }


        // total cart price + shipping charge
        case 'CART_TOTAL_PRICE' :
            let totalPrice = state.cart.reduce((initialValue, currElem)=>{
                let {price, amount} = currElem;
    
                initialValue = initialValue + (price * amount);
                return initialValue;
            },0);
            return{
                ...state,
                total_price : totalPrice
            }
        default:
            return state;
    }
}

export default Cart_Reducer;