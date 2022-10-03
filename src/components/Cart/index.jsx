import React from "react";
import './Cart.css';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import ItemCart from "../ItemCart";


const Cart = () => {

    const  { cart, totalPrice } = useCartContext();

    const order = {
		buyer: {
			name: "Martin Lafauci",
			email: "mail@gmail.com",
			phone: "1234567890",
			address: "Calle Falsa 123",
		},
		items: cart.map((product) => ({
			id: product.id,
			title: product.nombreProducto,
			price: product.precio,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

    const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	};

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
            <p>Total de la compra: ${totalPrice()}</p>
            <button onClick={handleClick}>Confirmar compra</button>
        </>
        
    );
}

export default Cart;