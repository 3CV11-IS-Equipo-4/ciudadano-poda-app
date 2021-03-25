import Table from '../Components/Table';
import { tables } from '../utils/const';

import Layout from '../Components/Layout';
import Card from '../Components/Card-blank';
import Button from '../Components/Button';

export default function Profile() {
    return(
        <Layout>
            <div className="d-flex justify-content-between w-100 h-100">
                <div className="text-right">
                    <Card>
                    <h4>Nombre:</h4>

                    <h4>Malinali Becerril Bernal</h4>
                    <br></br>
                    <h4>Correo Electrónico:</h4>

                    <h4>mali@devf.mx</h4>
                    <br></br>
                    <h4>Teléfono:</h4>

                    <h4>5529891132</h4>
                    <br></br>
                    </Card>
                    <Button styling="success" type="button" click={() => {}} text="Cerrar Sesión"></Button>
                </div>
                <Table cols={tables.estadoSolicitud} datos={tables.mockData}></Table>
            </div>
        </Layout>
    );
}