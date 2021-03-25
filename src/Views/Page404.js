import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Layout from '../Components/Layout';
import Card from '../Components/Card';

export default function Page404() {
    return(
        <>
            <Navbar type={"ciudadano"}></Navbar>
            <Layout head="Solicitud en vía pública" subheading="Datos del ciudadano" children={<div className="d-flex justify-content-between"><Card></Card><Card></Card></div>}></Layout>
            <Layout head="Solicitud en vía pública" subheading="Datos del ciudadano" children={<Card></Card>}></Layout>
            <Footer></Footer>
        </>
    );
}