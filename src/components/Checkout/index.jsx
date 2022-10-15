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
            <h2>
                Gracias por tu compra, tu ID de seguimiento es:
                <br />
                {' '}
                <br />
                <h2><span className="badge rounded-pill">{orderId}</span></h2>
            </h2>
        );
    }

    return (
        <div>
            <Form handleId={handleId} />
        </div>
    );
};

export default Checkout;