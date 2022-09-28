import { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {
  const [expense, setExpense] = useState([]);

const addExpenseHandler = (expense) => {
         
        setItems([...expense, expense]);
        console.log("Adding" , expense)
    }
    const cartContext = {
        expense: expense,
        addExpense: addExpenseHandler,
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;