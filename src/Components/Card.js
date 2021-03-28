import './Card.css';
import img_pi from '../img/img-2.png'
import img_ci from '../img/img-1.png'

export default function Card({ type }) {
    return(
        <div className="card d-flex justify-content-center my-2">
        <div className="card-body">
            <h5 className="card-title ">{type === "privada" ? "En propiedad privada" : "En via pública"}</h5>            
            
            <img src={type === "privada" ? img_ci : img_pi} className="img-fluid p-1" alt={type === "privada" ? "Imagen de solicitud en vía pública": "Imagen en propiedad privada"}/>
      </div>
      </div>
    );
}