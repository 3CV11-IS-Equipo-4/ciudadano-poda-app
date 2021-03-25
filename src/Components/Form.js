import Button from "./Button";

export default function Form({submit, textBtn, children}) {
    return(
    <form onSubmit={submit}className="container">
        <div className="d-flex flex-wrap justify-content-center">
            {children}
        </div>
        <Button type="submit" text={textBtn}></Button>
    </form>
    );
};