
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from './Routes';

function Notes() {
    const [notes, setNote] = useState([]);

    useEffect(() => {
        // Función asincrónica para hacer la solicitud de notas
        const fetchNotes = async () => {
          try {
            const response = await fetch(API_ROUTES.GET_ALL_NOTES, { headers: {'ngrok-skip-browser-warning' : 'true'}});
            if (response.ok) {
              const data = await response.json();
              setNote(data); // Actualiza el estado con los datos obtenidos
            } else {
              console.error('Error fetching notes:', response.statusText);
            }
          } catch (error) {
            console.error('Error fetching notes:', error);
          }
        };
    
        fetchNotes(); // Llamada a la función asíncrona dentro de useEffect
      }, []);
    /*const response = await fetch('http://localhost:8000/notes/all');
    console.log({response})
    const data = await response.json();
    setNote(data);*/
    return (
        <div>
            <h2>Notas Registradas</h2>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>ID({note._id}): Titulo {note.titulo} Mensaje({note.mensaje}) - Creado: {note.fecha}</li>
                ))}
            </ul>
           
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default Notes;
