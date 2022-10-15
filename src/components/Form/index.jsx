import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import './Form.css';
import React from 'react';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { db } from '../../firebase/config'

const Form = ({ handleId }) => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const { totalPrice, cart } = useCartContext();
    const total = totalPrice();

    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            buyer: { nombre, telefono },
            date: serverTimestamp(),
            cart,
            total,
        };
        const refOrden = collection(db, 'ordenes');
        addDoc(refOrden, orden).then((res) => {
            handleId(res.id);
        });
    };

    const handleNombre = (e) => setNombre(e.target.value);

    const handleTelefono = (e) => setTelefono(e.target.value);

    return (
        <div id="containerForm">
            
        <form action="" onSubmit={handleSubmit}>
            
            <div >
            <div className="mb-4">
                <label for="exampleInputEmail1" className="form-label">Nombre</label>
                <input type="text" name="nombre" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={nombre} onChange={handleNombre} required />   
            </div>
            <div className="mb-4">
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-4">
                <label for="exampleInputEmail1" className="form-label">Celular</label>
                <input type="number" name="telefono" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={telefono} onChange={handleTelefono} required />
            </div>
            <button type="submit" className="btn btn-primary btn-lg">Confirmar</button>
            </div>
         
        </form>
        </div>        
    );
};

export default Form;