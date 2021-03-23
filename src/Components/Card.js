import './Card.css';

export default function Card({ title, children }) {
    return(<div className="card">
        {children}
        <h2>{title}</h2>
    </div>);
}