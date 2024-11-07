import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_ROUTES } from './Routes';

function CreateNote() {
    const [note, setNote] = useState({ titulo: '', mensaje: '', fecha: '' });
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(API_ROUTES.CREATE_NOTE, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note),
        },  { headers: {'ngrok-skip-browser-warning' : 'true'}});

        navigate('/notes'); //redirecciona cuando grabo.
    };

    return (
        <div>
            <h2>Crear Nota</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="titulo" onChange={(e) => setNote({ ...note, titulo: e.target.value })} />
                <input type="text" placeholder="mensaje" onChange={(e) => setNote({ ...note, mensaje: e.target.value })} />
                <input type="text" placeholder="fecha" onChange={(e) => setNote({ ...note, fecha: e.target.value })} />
                <button type="submit">Crear</button>
            </form>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default CreateNote;