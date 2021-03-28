import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout';
import Form from '../Components/Form';
import { publica, privado } from '../utils/const';
import { useEffect, useState } from 'react';

export default function Solicitud(){
    const history = useHistory();
    let { type } = useParams();
    const [tipo] = useState(type ==="via-publica" ? publica : privado);
    const [noStages] = useState(type ==="via-publica" ? Object.keys(publica).length : Object.keys(privado).length);

    const [inputsData, setInputsData] = useState([]);
    const [stage, setStage] = useState('');
    const [count, setCount] = useState(0);
    useEffect(() => {
        if(tipo[stage]) {
            setInputsData(tipo[stage]);
        }
    },[stage]);

    useEffect(() => {
        const [key] = Object.keys(tipo);
        setStage(key);
    },[]);

    const changePage = (inputs) => {
        if(count < noStages) {
            if(type ==='propiedad-privada' && count === 1) {
                if(inputs.solicitud === 'topiaria') {
                    setStage('treeDataView');
                    setCount(4);
                } else if(inputs.solicitud === 'construccion') {
                    setStage('constructionDataView');
                    setCount(3);
                } else if(inputs.solicitud === 'riesgo') {
                    setStage('riesgoDataView');
                    setCount(2);
                }
            } else if(type ==='propiedad-privada' && count === 2){
                setStage('treeDataView');
                setCount(4);
            } else {
                setStage(Object.keys(tipo)[count + 1]);
                const n = count + 1;
                setCount(n);
            }
        } else {
            let dataInputs = {...inputs};
            if(type==='propiedad-privada') {
                dataInputs.privada = {
                    tipo_privada: inputs.solicitud,
                    comprobante_domicilio: inputs.comprobante_domicilio,
                    comprobante_propiedad: inputs.comprobante_propiedad,
                }
                delete dataInputs.solicitud;
                delete dataInputs.comprobante_domicilio;
                delete dataInputs.comprobante_propiedad;
                if(inputs.solicitud === 'construccion') {
                    dataInputs.privada.construccion = {
                        "documento_registro" : inputs.documento_registro,
                        "documento_planos" : inputs.documento_planos,
                        "documento_declaratoria": inputs.documento_declaratoria, 
                    }
                    delete dataInputs.documento_registro;
                    delete dataInputs.documento_planos;
                    delete dataInputs.documento_declaratoria;
                }
                if(inputs.solicitud === 'riesgo') {
                    dataInputs.privada.riesgo = {
                        "documento_dictamen_riesgo" : inputs.documento_dictamen_riesgo,
                    }
                    delete dataInputs.documento_dictamen_riesgo;
                }
            }
            axios.post('https://podayderribo-cdmx.herokuapp.com/solicitudes/', {...dataInputs, modalidad:type })
            .then(({data})=>{

            })
            .catch(e => {

            });
        }
        console.log(inputs, stage, count,noStages);
    };
    /*     useEffect(() => {
        const token = window.localStorage.getItem('token');
        if(token) {
            const config = {
                headers: {
                    'Authorization': `JWT ${token}`
                }
            }
            axios.get('http://localhost:9000/quotes', config)
                .then(({data, status}) => {
                    console.log(data, status);
                    setQuote(data);
                })
                .catch(error => {
                    console.error(error.response.data);
                })
        } else {
            history.push('/');
        }
    }, []); */

    return (
        <Layout head={`Solicitud en ${type}`} type="ciudadano">
        <Form inputsData={inputsData} submit={changePage} styling="success" textBtn="Siguiente">
        </Form>
        <Link to="/">Volver al inicio</Link> 
    </Layout>);
}