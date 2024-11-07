import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from './Routes';

function FindNote() {
    const [id, setId] = useState('');
    const [note, setNote] = useState(null);

    const handleSearch = async () => {
        const response = await fetch(API_ROUTES.FIND_NOTE(id),  { headers: {'ngrok-skip-browser-warning' : 'true'}});
        const data = await response.json();
        setNote(data);
    };

    return (
        <div>
            <h2>Buscar Notas</h2>
            <input type="text" placeholder="id" onChange={(e) => setId(e.target.value)} />
            <button onClick={handleSearch}>Buscar</button>
            {note && <div>{note.titulo} {note.mensaje} - {note.fecha}</div>}
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default FindNote;