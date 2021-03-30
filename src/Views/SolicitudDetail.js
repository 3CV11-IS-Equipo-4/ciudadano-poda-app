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
        axios.get('https://podayderribo-cdmx.herokuapp.com/solicitudes/ciudadanos/'+id,config)
            .then(({data, status})=>{
                if(status === 200) {
                    setData(data);
                    console.log('data', data)
                }
            });
    }, []);
    return(
        <Layout head={data ? data.folio : ""}>
            <div>
                {data 
                ? 
                <div className="container  text-start">
                    <div className="mb-4 mt-3">
                        <h3 className="mb-3">Datos del árbol</h3>
                        <div className="d-flex justify-content-between">
                            <div className="col-3">
                                <p className="fw-bold">Sobre la calle:</p>
                                <p>{data.calle_arbol}</p>
                            </div>
                            <div className="col-3">
                                <p className="fw-bold">Entre la calle:</p>
                                <p>{data.calle_adyacente_1}</p>
                            </div>
                            <div className="col-3">
                                <p className="fw-bold">Y la calle:</p>
                                <p>{data.calle_adyacente_2}</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="col-3">
                                <p className="fw-bold">Código postal:</p>
                                <p>{data.codigo_postal}</p>
                            </div>
                            <div className="col-3">
                                <p className="fw-bold">Alcaldia :</p>
                                <p>{data.alcaldia_arbol}</p>
                            </div>
                            <div className="col-3">
                                <p className="fw-bold">Colonia:</p>
                                <p>{data.colonia_arbol}</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="col-3">
                                <p className="fw-bold">Referencias:</p>
                                <p>{data.referencias}</p>
                            </div>
                            <div className="col-3">
                                <p className="fw-bold">Motivo:</p>
                                <p>{data.motivos}</p>
                            </div>
                        </div>
                        <div>
                            <p className="fw-bold">Fotografías:</p>
                            <div className="d-flex justify-content-between flex-wrap">
                                {data.fotos.map(item => 
                                    <div className="col-4">
                                        <img src={item} className="img-fluid"/></div>
                                    )}
                            </div>
                        </div>
                    </div>
                    {data.modalidad==="propiedad-privada" ? 
                    <>
                        <div className="mb-4 mt-3">
                        <h3 className="mb-3">Datos de solicitud privada {data.modalidad}</h3>
                        <div className="d-flex justify-content-between flex-wrap">
                            <div className="col-12">Comprobante de domicilio</div>
                            {data.privada.comprobante_domicilio.map(item => 
                                    <div className="col-4">
                                        <img src={item} className="img-fluid"/></div>
                                    )}
                            <div className="col-12">Comprobante de propiedad</div>
                            {data.privada.comprobante_propiedad.map(item => 
                                    <div className="col-4">
                                        <img src={item} className="img-fluid"/></div>
                                    )}
                        </div>
                        </div>
                        {data.privada.tipo_privada==="construccion" ? 
                            <div className="mb-4 mt-3">
                                <h3 className="mb-3">Datos de solicitud por construcción</h3>
                                <div className="d-flex justify-content-between flex-wrap">
                                    <div className="col-8">Documento de registro</div>
                                    {data.privada.construccion.documento_registro.map(item => 
                                    <div className="col-4">
                                        <img src={item} className="img-fluid"/></div>
                                    )}
                                    <div className="col-8">Documento de planos</div>
                                    {data.privada.construccion.documento_planos.map(item => 
                                    <div className="col-4">
                                        <img src={item} className="img-fluid"/></div>
                                    )}
                                    <div className="col-8">Documento de declaratoria</div>
                                    {data.privada.construccion.documento_declaratoria.map(item => 
                                    <div className="col-4">
                                        <img src={item} className="img-fluid"/></div>
                                    )}
                                </div>
                            </div>
                            : ""}
                        {data.privada.tipo_privada==="riesgo" ? 
                            <div className="mb-4 mt-3">
                                <h3 className="mb-3">Datos de solicitud por riesgo</h3>
                                <div className="d-flex justify-content-between flex-wrap">
                                    <div className="col-8">Documento de dictamen de riesgo</div>
                                    <div className="col-8"><img src={data.privada.riesgo.documento_dictamen_riesgo} className="img-fluid"/></div>
                                </div>
                            </div>
                        : ""}
                    </>
                    : ""}
                </div>
                :''}
            </div>
        </Layout>
    );
}

export default protect(SolicitudDetail);