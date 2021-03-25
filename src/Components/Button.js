export default function Button({click = () => {}, styling, type, text}) {
    return(
        <button onClick={click} type={type} className={`btn btn-${styling} mt-5 mb-3`}>{text}</button>
    );
}