import { useState } from 'react';

export default function useForm(callback, defaults,page){
    const [inputs, setInputs] = useState(defaults);
    const [buttonStage, setButtonStage] = useState(false);

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
        if (page === 'citizenDataView'){
            if (!inputs.documento_identificacion_oficial){
                alert("Asegurate de subir tu identificación oficial")
            }else if(inputs.documento_identificacion_oficial.length !== 1){
                alert("Solo debes de subir un archivo")
            }else{
                callback(inputs);
            }
        }else if(page === 'privatDataView'){
            if (!inputs.comprobante_propiedad){
                alert("Asegurate de subir tu comprobante de propiedad")
            }            
            else if(inputs.comprobante_propiedad.length!==1){
                alert("Solo debes de subir solo un comprobante de propiedad")
            }
            else if(!inputs.comprobante_domicilio){
                alert("Aseguraet de subir tu comprobante de domicilio")
            } else if (inputs.comprobante_domicilio.length !==1){
                alert("Asegurate de subir solo un comprobante de domicilio")
            }else{
                callback(inputs);
            }
        }else if(page === 'riesgoDataView'){
            if(!inputs.documento_dictamen_riesgo){
                alert("Asegurate de subir tu dictamen de riesgo")
            }else if(inputs.documento_dictamen_riesgo.length !==1){
                alert("Asegurate de subir solo un dictamen de riesgo")
            }else{
                callback(inputs);
            }
        }else if(page === 'constructionDataView'){
            if(!inputs.documento_registro){
                alert("Asegurate de subir tu documento de registro")
            }else if(inputs.documento_registro.length !==1){
                alert("Asegurate de subir solo un dictamen de riesgo")
            } else if(!inputs.documento_declaratoria){
                alert("Asegurate de subir tu documento de declaratoria")
            }else if(inputs.documento_declaratoria.length !==1){
                alert("Asegurate de subir solo un documento de declaratoria")
            }else if(!inputs.documento_planos){
                alert("Asegurate de subir tus planos")
            }else if(inputs.documento_planos.length !== 1){
                alert("Asegurate de subir solo un documento de declaratoria")
            }else{
                callback(inputs);
            }
        }else if(page ==='treeDataView'){
            if(inputs.fotos){
                alert("Asegurate de subir al menos cinco fotografias")
            }else if(inputs.fotos.length >= 5 && inputs.fotos.length <= 10){
                alert("Asegurate de subir al menos cinco o maximo diez fotografias")
            }else{
                callback(inputs);
            }
        }
        
    }

    return {
        inputs,
        handleInputs,
        handleSubmit,
        handlePhotos,
    };

}