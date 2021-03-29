import Layout from '../Components/Layout';
import protect from '../utils/protect';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

function SolicitudDetail() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
               Authorization: `Bearer ${token}` 
            }
        }
        axios.get('https://poda-api.herokuapp.com/solicitudes/'+id,config)
            .then(({data, status})=>{
                if(status === 200) {
                    setData(data);
                    console.log('data', data)
                }
            });
    }, []);
    return(
        <Layout head={id}>
            <div>
                {data 
                ? <div className="container">
                    <div className="row align-items-end flex-wrap">
                        <div className="col">
                        Nombre(s):{data.nombres}
                        </div>
                        <div className="col">
                        Apellido Paterno: {data.apellito_paterno}
                        </div>
                        
                    </div>
                </div>
                :''}
            </div>
        </Layout>
    );
}

export default protect(SolicitudDetail);