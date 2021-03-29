import Layout from "../Components/Layout";
import Card from "../Components/Card-blank";
import Form from '../Components/Form';
import { logins } from '../utils/const';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
export default function Home() {
    const history = useHistory();

    const login = (inputs) => {
        axios.post('https://poda-api.herokuapp.com/ciudadanos/login', 
            {...inputs }
        )
            .then(({ data , status})=> {
                if(status === 200) {
                    window.localStorage.setItem('token', data.key);
                    history.push('/perfil');
                }
                // dependiendo del rol redireccionar
            })
            .catch(error => {
                console.log('Error', error.message);
                history.push('/registro/enviado/fallido');
            });
    };

    return(
        <Layout head={`Consultar solicitudes`} type="ciudadano">
            <Card className="m-5" title="Inicia sesión" styling="d-flex flex-wrap flex-row justify-content-center">
                <Form 
                inputsData={logins.loginCIView} 
                submit={login} 
                styling="success" 
                textBtn="Siguiente"
                stylingF="d-flex flex-row flex-wrap"
                stylingI="col-md-10">
                </Form>
            </Card>
            <Link to="/">Volver al inicio</Link> 
        </Layout>
    );
}