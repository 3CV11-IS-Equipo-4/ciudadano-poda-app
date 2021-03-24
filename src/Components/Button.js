export default function Button({click = () => {},style, type, text}) {
    return(
        <button onClick={click} type={type} className={`btn btn-${style}`}>{text}</button>
    );
}