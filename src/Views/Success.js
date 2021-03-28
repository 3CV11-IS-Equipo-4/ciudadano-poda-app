import Layout from "../Components/Layout";
import Card from "../Components/Card-blank";

import { Link } from "react-router-dom";
export default function Success({exitoso}) {

    return(
        <Layout head={``} type="ciudadano">
            <Card className="m-5" title="" styling="flex-row">
                {exitoso ?
                <h2>
                Se te envió un correo con tu usuario y contraseña para ver el estado de tu solicitud
                </h2>
                : <h2>
                Lo sentimos ocurrió un error en tu registro. Intenta de nuevo.
                </h2>}
                <div className="m-5 p-5">
                    <h4><Link to="/login">Chécalo aquí</Link></h4>    
                </div>
            </Card>
        </Layout>
    );
}