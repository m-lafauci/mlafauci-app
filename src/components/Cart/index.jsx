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
            <div>
            <img src="../images/empty.png" alt="empty" />
            </div>
            <div>
            <Link to="/"><button className="btn btn-primary btn-lg">Seguir comprando</button></Link>
            </div>
            </>
        );
    }

    return(
        <>
            {cart.map((product) => (<ItemCart key={product.id} product={product} />))}
            <h2><span className="badge rounded-pill">Total de la compra: ${totalPrice()}</span></h2>
            <Link to="/checkout"><button className="btn btn-primary btn-lg">Checkout</button></Link>
        </>
        
    );
}

export default Cart;