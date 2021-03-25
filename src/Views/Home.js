import Layout from "../Components/Layout";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
export default function Home() {
    return(
        <Layout head="Elige tu trámite">
            <div className="d-flex w-100 justify-content-around">
            <Link to="solicitud/via-publica"><Card className="m-5" ></Card></Link>
            <Link to="solicitud/propiedad-privada"><Card className="m-5" type="privada"></Card></Link>
            </div>
        </Layout>
    );
}