const {createStore, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');

//product constants

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";




const initialProductState = {
    products: ["sugar", "salt"],
    numberofProduct: 2,
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





//store 

const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getProduct())
store.dispatch(addProduct("Coffee"))
// store.dispatch(addProduct("Chicken"))
