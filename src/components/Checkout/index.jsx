import React from 'react';
import { useState } from 'react';
import Form from '../Form';

const Checkout = () => {
    const [orderId, setOrderId] = useState('');

    const handleId = (numeroDeOrden) => {
        setOrderId(numeroDeOrden);
    };

    if (orderId) {
        return (
            <div>
                <img src="../images/thanks.png" alt="thank you" />
                <h4>ID de Pedido:{' '}<h2><span className="badge rounded-pill">{orderId}</span></h2></h4>
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