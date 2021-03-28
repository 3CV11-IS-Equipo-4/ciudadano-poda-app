import { useState } from 'react';

export default function useForm(callback, defaults,page){
    const [inputs, setInputs] = useState(defaults);
    const [buttonStage, setButtonStage] = useState(false);

    const changeButtonStage = (page) => {
        if(page === 'citizenDataView'){
            if((inputs.nombres) && 
            (inputs.apellido_paterno) &&
            (inputs.apellido_materno) &&
            (inputs.calle) &&
            (inputs.numero_exterior) &&
            (inputs.numero_interior) &&
            (inputs.codigo_postal) &&
            (inputs.alcaldia) &&
            (inputs.colonia) &&
            (inputs.numero_telefono) &&
            (inputs.email) &&
            (inputs.documento_identificacion_oficial &&
                inputs.documento_identificacion_oficial.length === 1)
            ){
                setButtonStage(true)
            }
            console.log(inputs.nombres)
        }else if(page === 'privatDataView'){
            if ((inputs.comprobante_propiedad && inputs.comprobante_propiedad.length===1) && 
                (inputs.comprobante_domicilio && inputs.comprobante_domicilio.length ===1) &&
                (inputs.solicitud && inputs.solicitud.length === 1)
            ){setButtonStage(true)}
        }else if(page === 'riesgoDataView'){
            if(
                inputs.documento_dictamen_riesgo && inputs.documento_dictamen_riesgo ===1
            ){setButtonStage(true)}
        }else if(page === 'constructionDataView'){
            if(
                (inputs.documento_registro && inputs.documento_registro ===1) &&
                (inputs.documento_declaratoria && inputs.documento_declaratoria.length ===1) &&
                (inputs.documento_planos && inputs.documento_planos.length === 1)
            ){setButtonStage(true)}
        }else if(page ==='treeDataView'){
            if(
                inputs.calle_arbol &&
                inputs.calle_adyacente_1 &&
                inputs.calle_adyacente_2 &&
                inputs.cp &&
                inputs.alcaldia_arbol &&
                inputs.colonia_arbol &&
                inputs.referencias &&
                inputs.motivos &&
                inputs.fotos &&
                (inputs.fotos.length >= 5 && inputs.fotos.length <= 10) 
            ){setButtonStage(true)}
        }
    };

    const handleInputs = (event) => {
        console.log('Inputs', inputs);
        console.log('Event', event.target.value);
        console.log('Event', event.target.id);
        
        setInputs({
            ...inputs,
           [event.target.id]:event.target.value
        });
        console.log('Inputs', inputs);
        // recibir el evento 
        // cambiar el valor de la propiedad
        changeButtonStage(page);
    };
    
    const handlePhotos = (urls, value) => {
        console.log('Inputs', inputs);
        console.log('Event', value);
        console.log('Event', urls);
        
        setInputs({
            ...inputs,
           [value]:urls
        });
        console.log('Inputs', inputs);
        // recibir el evento 
        // cambiar el valor de la propiedad
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        callback(inputs);
    }

    return {
        inputs,
        handleInputs,
        handleSubmit,
        handlePhotos,
        buttonStage
    };

}