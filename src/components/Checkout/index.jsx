import React from 'react';
import { useState } from 'react';
import Form from '../Form';
import { useCartContext } from "../../context/CartContext";

const Checkout = () => {
    const  { clearCart } = useCartContext();

    const [orderId, setOrderId] = useState('');

    const handleId = (numeroDeOrden) => {
        setOrderId(numeroDeOrden);
    };

    if (orderId) {
        return (
            <div>
                <img src="../images/thanks.png" alt="thank you" />
                <h4>ID de Pedido:{' '}<h2><span className="badge rounded-pill">{orderId}</span></h2></h4>
                {clearCart()}
            </div>
        );
    }

        return (
            <div>
                <Form handleId={handleId} />
            </div>
        );
};

export default Checkout;