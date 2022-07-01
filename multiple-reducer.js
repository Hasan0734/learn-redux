const {createStore, combineReducers} = require('redux')

//product constants

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";


//product constants

const GET_CART_ITEMS = "GET_CART_ITEMS";

const ADD_CART_ITEMS = "ADD_CART_ITEMS";


const initialProductState = {
    products: ["sugar", "salt"],
    numberofProduct: 2,
}
const initialCartState = {
    carts: ["sugar",],
    numberofItems: 1,
}



const getProduct = () => {
    return{
        type: GET_PRODUCTS,
      
    }
};

const addProduct = (product) => {
    return{
        type: ADD_PRODUCT,
        payload: product
    }
};




const getCartItems = () => {
    return{
        type: GET_CART_ITEMS,
      
    }
};

const addCartItem = (cart) => {
    return{
        type: ADD_CART_ITEMS,
        payload: cart
    }
};


// product reducer

const productReducer = (state = initialProductState, action) => {
        switch (action.type){
            case GET_PRODUCTS:
                return {
                    ...state,
                }
            case ADD_PRODUCT:
                return{
                    product: [...state.products, action.payload],
                    numberofProduct: state.numberofProduct + 1
                }
            default: 
            return state;
        }
}

const cartReducer = (state = initialCartState, action) => {
        switch (action.type){
            case GET_CART_ITEMS:
                return {
                    ...state,
                }
            case ADD_CART_ITEMS:
                return{
                    carts: [...state.carts, action.payload],
                    numberofItems: state.numberofItems + 1
                }
            default:
                return state;
        }
}


const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})


//store 

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch(getProduct())
// store.dispatch(addProduct("Coffee"))
// store.dispatch(addProduct("Chicken"))


store.dispatch(getCartItems())
store.dispatch(addCartItem("Coffee"))