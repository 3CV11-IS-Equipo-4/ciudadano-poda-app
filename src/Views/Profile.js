import Table from '../Components/Table';
import { tables } from '../utils/const';

import Layout from '../Components/Layout';
import Card from '../Components/Card-blank';
import Button from '../Components/Button';
import { useHistory } from "react-router-dom";

export default function Profile() {
    const history = useHistory();
    return(
        <Layout type="ciudadano">
            <div className="row w-100 h-100">
                <div className="col-12 col-lg-5 px-3 text-right d-flex flex-column align-items-center">
                    <Card>
                    <div>
                        <h4>Nombre:</h4>

                        <h4>Malinali Becerril Bernal</h4>
                        <br></br>
                        <h4>Correo Electrónico:</h4>

                        <h4>mali@devf.mx</h4>
                        <br></br>
                        <h4>Teléfono:</h4>

                        <h4>5529891132</h4>
                        <br></br>
                    </div>
                    </Card>
                    <Button styling="success" type="button" click={() => history.push('/login')} text="Cerrar Sesión"></Button>
                </div>
                <div className="col-12 col-lg-7 px-3"><Table cols={tables.estadoSolicitud} datos={tables.mockData}></Table></div>
            </div>
        </Layout>
    );
}