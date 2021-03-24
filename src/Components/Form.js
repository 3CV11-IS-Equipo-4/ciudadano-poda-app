import Button from "./Button";

export default function Form({submit, textBtn, children}) {
    return(
    <form onSubmit={submit}>
        <div className="container">
            {children}
        </div>
        <Button type="submit" text={textBtn}></Button>
    </form>
    );
};