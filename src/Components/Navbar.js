import logo from '../img/logocdmx.png'
import "./Navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar({type}){
    return(
        <nav className="navbar bar">
            <div className="container-fluid conter">
                <div className=" col-4 logo">
                    <img className="img-fluid" src={logo} alt="Logo ciudad de méxico"/>
                </div>
                <div className="col-8 title h-100">
                    {type === "cuidadano" ? <div className="col-8 title d-flex justify-content-center h-100">
                        <h1>Solicitud de poda o derribo de árbol</h1>
                    </div> :  
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Features</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Pricing</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown link
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </nav>
    );
}