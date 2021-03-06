import Layout from "../Components/Layout";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();
    return(
        <Layout head="Elige tu trámite" type="ciudadano">
            <div className="d-flex w-100 justify-content-around flex-wrap">
                <Link to="/registro/solicitud/via-publica"><Card className="m-5"></Card></Link>
                <Link to="/registro/solicitud/propiedad-privada"><Card className="m-5" type="privada"></Card></Link>
            </div>
            <div className="m-5 p-5">
                <h4>¿Ya hiciste tu solicitud? </h4>
                <h4><Link to="/login">Chécalo aquí</Link></h4>    
            </div>     
            </Layout>
    );
}