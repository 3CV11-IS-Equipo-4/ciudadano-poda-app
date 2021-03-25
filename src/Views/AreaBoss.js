import Table from '../Components/Table';
import { tables } from '../utils/const';

import Layout from '../Components/Layout';

export default function AreaBoss() {
    return(
        <Layout>
            <div className="d-flex justify-content-between w-100 h-100">
                <Table cols={tables.jefeArea} datos={tables.ejemploJA}></Table>
            </div>
        </Layout>
    );
}