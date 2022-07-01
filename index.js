//state 
//action 
//reducre
//store

const {createStore} = require('redux');
//constants

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const ADD_USER = 'ADD_USER';


//<state>
const initialSate = {
    user: ["Jahid"],
    count: 0
}
// </state>



//<action>
const incrementCount = () => {
    return{
        type: INCREMENT
    }
};

const decrementCount = () => {
    return{
        type: DECREMENT
    }
};

const resetCount = () => {
    return{
        type: RESET
    }
};
const incrementByValue = (value) => {
    return{
        type: INCREMENT_BY_VALUE,
        payload: value
    }
};
const addUser = (user) => {
    return{
        type: ADD_USER,
        payload: user
    }
};

//</action>



//<reducer>

const counterReducer = (state = initialSate, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        case ADD_USER:
            return {
                user: [...state.user, action.payload],
                count: state.count + 1

            }
    
        default:
            state;
    }
};
//</reducer>

//<store>

const store = createStore(counterReducer);

store.subscribe(() => {
  
    console.log(store.getState().user);
})


// store.dispatch(decrementCount());
// store.dispatch(resetCount());
// store.dispatch(incrementByValue(5));
store.dispatch(addUser("Hasan"));
store.dispatch(addUser("Monir"));
// </store>