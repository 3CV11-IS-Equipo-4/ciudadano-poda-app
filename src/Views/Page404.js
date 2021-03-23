import { Link } from 'react-router-dom';
export default function Page404() {
    return(
        <>
            <h1>Esa ruta no existe</h1>
            <Link to="/">Volver al inicio</Link>
        </>
    );
}