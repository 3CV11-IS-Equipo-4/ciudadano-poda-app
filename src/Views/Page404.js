import { Link } from 'react-router-dom';
import Layout from '../Components/Layout';


export default function Page404() {
    return(
        <Layout head="No encontrado :c" subheading="404" type="ciudadano">
            <h1>Esa ruta no existe</h1>
            <Link to="/">Volver al inicio</Link>
        </Layout>
    );
}