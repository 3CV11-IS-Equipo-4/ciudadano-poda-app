import Table from '../Components/Table';
import { tables } from '../utils/const';

import Layout from '../Components/Layout';

export default function Admin() {
    return(
        <Layout>
            <div className="d-flex justify-content-between w-100 h-100">
                <Table cols={tables.Admin} datos={tables.ejemploAdmin}></Table>
            </div>
        </Layout>
    );
}