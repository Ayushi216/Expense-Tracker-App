import React from "react";

const CartContext= React.createContext({
    expense: [],
    addExpense: (expense) => {}
})

export default CartContext;