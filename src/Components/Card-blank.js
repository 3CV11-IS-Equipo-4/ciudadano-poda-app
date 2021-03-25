import './Card.css';

export default function Card({title,content}) {
    return(
        <div className="card d-flex justify-content-center">
            <div className="card-body d-flex justify-content-center">
                <h5 className="card-title ">{title}</h5>
                {content}
            </div>
        </div>
    );
}