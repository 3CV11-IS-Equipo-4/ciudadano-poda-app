import Table from '../Components/Table';
import { tables } from '../utils/const';

import Layout from '../Components/Layout';
import Card from '../Components/Card';
import Button from '../Components/Button';

export default function Profile() {
    return(
        <Layout>
            <div className="d-flex justify-content-between w-100 h-100">
                <div className="text-right">
                    <Card></Card>
                    <Button styling="success" type="button" click={() => {}} text="Cerrar Sesión"></Button>
                </div>
                <Table cols={tables.estadoSolicitud} datos={tables.mockData}></Table>
            </div>
        </Layout>
    );
}