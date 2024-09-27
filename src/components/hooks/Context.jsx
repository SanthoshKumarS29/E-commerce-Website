import { createContext, useReducer, useState } from "react";

export const CartContext = createContext()


const cartReducer = (state,action) => {
    switch(action.type){
        case 'ADD-TO-CART':
            return [...state,{...action.payload,quantity:1}]
        
        case 'REMOVE-FROM-CART':
            return state.filter(item => item.id !== action.payload)
        
        default:
            return state;
    }
}

// CartProvider Component
export const CartProvider = ({ children }) => {
    const [cart,dispatch] = useReducer(cartReducer,[])

    // Function to add Product to the cart
    const addToCart = (product) => {
        dispatch({ type: 'ADD-TO-CART',payload: product})
    };
    // Funtion to remove product from the cart
    const removeToCart = (id) => {
        dispatch({ type: 'REMOVE-FROM-CART',payload: id})
    };

    return(
        <CartContext.Provider value={{ cart, addToCart, removeToCart}}>
            {children}
        </CartContext.Provider>
    )
}