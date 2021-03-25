
import React from 'react';

function Select({label,options,placeholder,change,value,required,name}){
    return(
        <>
            <div className="col-12 col-md-3 mx-3">
              <label className="form-label">{label}</label>
              <select 
                name={name} 
                id={name} 
                className="form-select" 
                value={value} 
                onChange={change}
                required={required}
                defaultValue="DEFAULT"
                >   
                    <option value="DEFAULT" disabled>{placeholder}</option>
                    { options  
                    ? options.map((o)=><option key={o.value + name} value={o.value}>{o.label}</option>)
                    : ''}
                     
              </select>
            </div>
        </>
    );
};

export default Select;