import { useState } from 'react';

export default function useForm(callback, defaults){
    const [inputs, setInputs] = useState(defaults);

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
        callback(inputs);
    }

    return {
        inputs,
        handleInputs,
        handleSubmit,
        handlePhotos,
    };

}