import './Card.css';
import img_pi from '../img/img-2.jpg'
import img_ci from '../img/img-1.jpg'

export default function Card({ type }) {
    return(
        <div className="card d-flex justify-content-center">
            <div className="card-body d-flex justify-content-center">
            <h5 className="card-title ">{type === "privada" ? "En propiedad privada" : "En via pública"}</h5>            
            </div>
            <img src={type === "privada" ? img_ci : img_pi} className="card-img-buttom" alt={type === "privada" ? "Imagen de solicitud en vía pública": "Imagen en propiedad privada"}/>
      </div>
    );
}