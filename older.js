const {createStore} = require('redux')


//define constants

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";



const initialCouterSate = {
    count: 0
}

const initialUserState = {
    user: [{name: "Jahid", email: "jahid@gmail.com"}]
}

//action object type payload

const incrementCouter = () => {
    return {
        type: INCREMENT,
    }
}


const decrementCouter = () => {
    return {
        type: DECREMENT,
    }
};

// const addUser = () => {
//     return {
//         type: ADD_USER,
//         payload: {name: "Rasel", email:"rasel@gmail.com"}
//     }
// }


//create reducer for counter Reducer

const counterReducer = (state = initialCouterSate, action) => {

    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            }
            
        case DECREMENT:
            
            return{
                ...state,
                count: state.count - 1
            }
    
        default:
            state;
    }
};



//state
//action
//reducer on action type based
//store on state
//store - getState(), dispatch(), subscribe()


//create store


const store = createStore(counterReducer);


store.subscribe(() => {
    console.log(store.getState());
})

//dispatch action

store.dispatch(incrementCouter())
store.dispatch(incrementCouter())
store.dispatch(incrementCouter())
store.dispatch(incrementCouter())
store.dispatch(decrementCouter())