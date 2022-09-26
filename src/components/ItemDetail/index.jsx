import './ItemDetail.css';

import React, { useState } from "react";
import { useCartContext } from '../../context/CartContext';
import ItemCount from "../ItemCount";
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {

    const [ goToCart, setGoToCart ] = useState(false);

    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    };

    return(
        <div className='card_detail'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={data.imagen} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{data.nombreProducto}</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et in!</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div className='finalizarCompra'>
                    {
                        goToCart
                        ? <Link to='/cart'><button className='btn btn-success'>Finalizar compra</button></Link>                    
                        : <ItemCount initial={3} stock={5} onAdd={onAdd} />
                    }
                    </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default ItemDetail;