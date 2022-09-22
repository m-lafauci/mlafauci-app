import React from "react";
import './ItemDetail.css';

export const ItemDetail = ({ data }) => {
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
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et in! Quod veritatis doloribus.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div className='finalizarCompra'>
                    {/* {
                        goToCart
                        ? <Link to='/cart'><button className='btn btn-success'>Finalizar compra</button></Link>                    
                        : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    } */}
                    </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default ItemDetail;