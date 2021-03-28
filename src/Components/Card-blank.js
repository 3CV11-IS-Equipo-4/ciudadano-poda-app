import './Card.css';

export default function Card({title, children, styling}) {
    return(
        <div className="card d-flex justify-content-center">
            <div className={`card-body ${styling || 'd-flex justify-content-center'}`}>
                <h5 className="card-title ">{title}</h5>
                <div>{children}</div>
            </div>
        </div>
    );
}