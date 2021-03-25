
import React from 'react';

function Input({label,type,placeholder,change,value,required,name}){
    return(
        <>
            <div className="col-12 col-md-3 mx-3">
              <label className="form-label">{label}</label>
              <input 
              name={name}
              id={name}
              type={type} 
              onChange={change}
              value={value}
              className="form-control"
              placeholder={placeholder} 
              required={required}/>
              <p className="help-block text-danger"></p>
            </div>
        </>
    );
};

export default Input;