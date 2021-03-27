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
                if(inputs.solicitud === 'Topiara') {
                    setStage('treeDataView');
                    setCount(4);
                } else if(inputs.solicitud === 'Construccion') {
                    setStage('constructionDataView');
                    setCount(3);
                } else if(inputs.solicitud === 'Riesgo') {
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
            console.log('Ya no debo avanzar');
            axios.post('https://podayderribo-cdmx.herokuapp.com/solicitudes/', {...inputs, modalidad:type })
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