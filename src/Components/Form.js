import Button from "./Button";
import useForm from "../hooks/useForm";
import Input from "./Input";
import Select from "./Select";
export default function Form({submit, inputsData, textBtn, children,style}) {

    const {
        inputs,
        handleSubmit,
        handleInputs,
    } = useForm(submit,
        {}
    );

    const selectType = (i, n) => {
        switch(i.inputType){
            case 'select':
                return <Select
                    label={i.label}
                    options={i.items}
                    key={i.name + 'select'}
                    placeholder={i.placeholder}
                    change={handleInputs}
                    required={i.required}
                    value={inputs[i.value]}
                    name={i.name}
                    />
            case 'photos':
                return <></>
            default:
                return <Input
                        label={i.label}
                        type={i.type}
                        key={i.name}
                        placeholder={i.placeholder}
                        change={handleInputs}
                        value={inputs[i.value]}
                        required={i.required}
                        name={i.name}
                    />
        }
    }
    return(
        <form onSubmit={handleSubmit} className="container">
            <div className="d-flex flex-wrap justify-content-center">
                {inputsData ? 
                    inputsData.map((i,index) => 
                    selectType(i,index))
                    : ''
                }
                {children}
            </div>
            <Button type="submit" style={style} text={textBtn}></Button>
        </form>
    );
};