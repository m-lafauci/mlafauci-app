import './Item.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ( { info }) => {
    return(
    <div className="col-12 ml-5 mb-3 col-md-3">
      <div className="card">
         <Link to={`/detalle/${info.id}`}><img src={info.imagen} className="card-img-top" alt={info.nombreProducto} /></Link>
        <div className="card-body">
          <h4 className="card-title">{info.nombreProducto}</h4>
          <h5 className="card-text">${info.precio}</h5>
          <p className="text-center"><em>Stock disponible: {<b>{info.stock}</b>} unidades</em></p>
        </div>
      </div>
    </div>        
    );
}

export default Item;