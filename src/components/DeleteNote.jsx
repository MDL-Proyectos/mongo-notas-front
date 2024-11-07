import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_ROUTES } from './Routes';

function DeleteNote() {
    const [id, setId] = useState('');
    const navigate = useNavigate(); 

    const handleDelete = async () => {
        await fetch(API_ROUTES.DELETE_NOTE(id), { method: 'DELETE' }, { headers: {'ngrok-skip-browser-warning' : 'true'}});
        navigate('/notes'); //redirecciona cuando grabo.
    };

    return (
        <div>
            <h2>Eliminar Notas</h2>
            <input type="text" placeholder="id" onChange={(e) => setId(e.target.value)} />
            <button onClick={handleDelete}>Eliminar</button>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default DeleteNote;