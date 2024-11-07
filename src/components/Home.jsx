import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <h1>Notas App!</h1>
            <ul>
                <li><Link to="/create">Crear Nota</Link></li>
                <li><Link to="/notes">Ver Todas las Notas</Link></li>
                <li><Link to="/find">Buscar Notas</Link></li>
                <li><Link to="/update">Actualizar Notas</Link></li>
                <li><Link to="/delete">Eliminar Nota</Link></li>
            </ul>
        </div>
    );
}
