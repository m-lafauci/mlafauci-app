import './ItemCount.css';
import React, { useState, useEffect } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return(
        <div className="counter">
            <button className="btn btn-outline-danger btn-circle btn-me" disabled={count <= 1} onClick={decrease}><i className="bi bi-dash-lg"></i></button>
            <span className='spanCounter'>{count}</span>
            <button className="btn btn-outline-success btn-circle btn-me" disabled={count >= stock} onClick={increase}><i className="bi bi-plus-lg"></i></button>
            <div>
                <button className="btn btn-primary" disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;
