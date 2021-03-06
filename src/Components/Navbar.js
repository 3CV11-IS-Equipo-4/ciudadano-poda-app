import logo from '../img/logocdmx.png'
import "./Navbar.css";
import payload from '../utils/payload';
import { Link } from 'react-router-dom';

export default function Navbar({type}){
    const p = payload();
    return(
        <nav className="navbar bar">
            <div className="container-fluid conter">
                
                    <div className=" col-3 logo">
                    <Link to="/">
                        <img className="img-fluid" src={logo} alt="Logo ciudad de méxico"/>
                        </Link>
                    </div>
                
                <div className="col-8 title h-100">
                    {type === "ciudadano" ? <div className="col-12 title d-flex justify-content-center h-100">
                        <h4>Solicitud de poda o derribo de árbol</h4>
                    </div> :  
                    (
                        <div className="d-flex justify-content-end mr-5">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout">
                                Cerrar Sesión
                            </Link>
                            </li>
                        </ul>
                    </div>
                    )
                    }
                </div>
            </div>
        </nav>
    );
}