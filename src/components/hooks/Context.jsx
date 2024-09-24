import { createContext, useState } from "react";

export const CartContext = createContext()

// CartProvider Component
export const CartProvider = ({ children }) => {
    const [cart,setCart] = useState([]);

    // Function to add Product to the cart
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart,product])
    };
    // Funtion to remove product from the cart
    const removeToCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
    };

    return(
        <CartContext.Provider value={{ cart, addToCart, removeToCart}}>
            {children}
        </CartContext.Provider>
    )
}