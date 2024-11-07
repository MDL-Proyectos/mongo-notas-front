import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_ROUTES } from './Routes';

function UpdateNote() {
    const [id, setId] = useState('');
    const [note, setNote] = useState({ titulo: '', mensaje: '', fecha: '' });
    const navigate = useNavigate(); 
    const handleUpdate = async () => {
        await fetch(API_ROUTES.UPDATE_NOTE(id), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note),
        },  { headers: {'ngrok-skip-browser-warning' : 'true'}});
        navigate(`/find/${id}`); //redirecciona cuando grabo.
    };

    return (
        <div>
            <h2>Actualizar Usuario</h2>
            <input type="text" placeholder="_id" onChange={(e) => setId(e.target.value)} />
            <input type="text" placeholder="titulo" onChange={(e) => setNote({ ...note, titulo: e.target.value })} />
            <input type="text" placeholder="mensaje" onChange={(e) => setNote({ ...note, mensaje: e.target.value })} />
            <input type="email" placeholder="fecha" onChange={(e) => setNote({ ...note, fecha: e.target.value })} />
            <button onClick={handleUpdate}>Actualizar</button>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default UpdateNote;