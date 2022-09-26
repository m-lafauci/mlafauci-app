import React from "react";
import './CartWidget.css';
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {

    const { totalProducts } = useCartContext();

    return(
        <div>
            <button type="button" className="btn btn-danger btn-lg">
            <i className="bi bi-cart3"> </i>
            <span>{totalProducts() || ""}</span>
            </button>
        </div>
    );
}

export default CartWidget;