import Table from '../Components/Table';
import { tables } from '../utils/const';

import Layout from '../Components/Layout';
import { useHistory } from "react-router-dom";

export default function Admin() {
    const history = useHistory();
    return(
        <Layout>
            <div className="d-flex justify-content-between w-100 h-100">
                <Table cols={tables.Admin} datos={tables.ejemploAdmin}></Table>
            </div>
            <Button styling="success" type="button" click={() => history.push('/login')} text="Cerrar Sesión"></Button>
        </Layout>
    );
}