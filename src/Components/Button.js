export default function Button({click = () => {}, styling, type, text}) {
    return(
        <button onClick={click} type={type} className={`btn btn-${styling}`}>{text}</button>
    );
}