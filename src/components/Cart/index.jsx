import React from "react";
import './Cart.css';
import { useCartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import ItemCart from "../ItemCart";


const Cart = () => {

    const  { cart, totalPrice } = useCartContext();

    if(cart.length === 0) {
        return(
            <>
            <p className="pCart">El carrito está vacio</p>
            <Link className="link" to="/">Seguir comprando</Link>
            </>
        );
    }

    return(
        <>
            {cart.map((product) => (<ItemCart key={product.id} product={product} />))}
            <p>Total de la compra: {totalPrice()}</p>
        </>
        
    );
}

export default Cart;