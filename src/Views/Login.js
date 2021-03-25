import Layout from "../Components/Layout";
import Card from "../Components/Card-blank";
import Form from '../Components/Form';
import {logins} from '../utils/const';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";

export default function Home() {
    // const [inputsData] = useState(logins);
    // const changePage = (inputs) => {
    //     console.log('Ya no debo avanzar');
    //     axios.post('https://podayderribo-cdmx.herokuapp.com/solicitudes/', {...inputs, tipo:type })
    //         .then(({response})=>{

    //         })
    //         .catch(e => {

    //         });
    // };
    //const inputsData = logins()
    //let content = <Form inputsData={inputsData} submit={changePage} styling="success" textBtn="Siguiente"></Form>;
    let content = "";
    

    return(
        <Layout head="">
            <div className="d-flex w-100 justify-content-around">
                <Card className="m-5" title="Titulo"  content={content}></Card>
            </div>
        </Layout>
    );
}