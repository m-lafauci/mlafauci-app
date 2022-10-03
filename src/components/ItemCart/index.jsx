import React from "react";
import { useCartContext } from "../../context/CartContext";
import './ItemCart.css';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return(
        /* <div className="itemCart">
            <img src={product.imagen} alt={product.nombreProducto} />
            <div>
                <p>Descripcion: {product.nombreProducto}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio Unitario: {product.precio}</p>
                <p>Subtotal: {product.quantity * product.precio} </p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div> */
        <div className="container-fluid row justify-content-center>">
        <div className='card_detail'>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={product.imagen} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title p-1">{product.nombreProducto}</h5>
                    <p className="card-text p-1">Unidades: {product.quantity} / Precio U.: ${product.precio}</p>
                    {/* <p className="card-text p-1">Precio U.: ${product.precio}</p> */}
                    <h5 className="card-text p-1">Subtotal: ${product.quantity * product.precio}</h5>
                    <button className="btn btn-outline-danger mt-3"onClick={() => removeProduct(product.id)}><i className="bi bi-trash"></i></button>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default ItemCart;