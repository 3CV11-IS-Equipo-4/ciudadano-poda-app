import Table from '../Components/Table';
import { tables } from '../utils/const';
import Layout from '../Components/Layout';
import Card from '../Components/Card-blank';
import Button from '../Components/Button';
import { useHistory } from "react-router-dom";
import protect from '../utils/protect';
import axios from 'axios';
import payload from '../utils/payload';

import { useEffect, useState } from 'react';

function Profile() {
    const history = useHistory();
    const [data, setData] = useState(null);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        const p = payload();
        const config = {
            headers:{
               Authorization: `Bearer ${token}` 
            }
        };
        axios.get('https://poda-api.herokuapp.com/solicitudes/ciudadanos/',config)
            .then(({data, status})=>{
                if(status === 200) {
                    setData(data.solicitudes);
                    setUser(p);
                }
            });
    }, []);
    return(
        <Layout>
            <div className="row w-100 h-100">
                <div className="col-12 col-lg-5 px-3 text-right d-flex flex-column align-items-center">
                    <Card>
                    <div>
                        { user ? 
                        <>  <h4>Nombre:</h4>

                        <h4>{user.sub.nombres}</h4>
                        <br></br>
                        <h4>Correo Electrónico:</h4>

                        <h4>{user.sub.email}</h4>
                        <br></br></>
                        : <>
                            <h4>Cargando...</h4>
                        </>
                        }
                    </div>
                    </Card>
                </div>
                <div className="col-12 col-lg-7 px-3">
                    {
                        data ? <Table cols={tables.estadoSolicitud} datos={data}></Table>
                        : ''
                    }
                </div>
            </div>
        </Layout>
    );
}

export default protect(Profile)