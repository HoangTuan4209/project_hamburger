import { createContext, useState } from "react";

export const CartContext = createContext([{}]);

export const CartProvider = ({children}) => {
    const [myCart, setMyCart] = useState([]);
    const [total,setTotal] = useState(0);
    const [count,setCount] = useState(0);

    const AddToCart = (newItem) => {
        setMyCart((prevCart) => [...prevCart, newItem]); // Cập nhật giỏ hàng bằng cách thêm sản phẩm mới
    };
    return(
        <CartContext.Provider value={{myCart,AddToCart,total,setTotal,count,setCount}}>
            {children}
        </CartContext.Provider>
    )
}