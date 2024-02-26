//redux toolkit
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

//reducer
const addToCart = createAction("ADD_TO_CART");
const cartReducer = createReducer([], builder => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    })
});

const login = createAction("CREATE_SESSION");
const loginReducer = createReducer({status: false}, builder => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    })
});

//store
const store = configureStore({
    reducer: {
        cart: cartReducer,
        login: loginReducer
    }
});

//subscribe
console.log("on create store : ", store.getState());
store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
})

//dispatch
store.dispatch(addToCart({id: 2, qty: 20}));
store.dispatch(login());