import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
export default function Page404() {
    return(
        <>
            <Navbar type={"ciudadano"}></Navbar>

            <h1>Esa ruta no existe</h1>
            <Link to="/">Volver al inicio</Link>
        </>
    );
}