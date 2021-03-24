
import React from 'react';

function Input({label,type,placeholder,change,value,required,name}){
    return(
        <div className="control-group">
            <div className="col-md-2">
              <label class="form-label">{label}</label>
              <input 
              name={name}
              type={type} 
              onChange={change}
              value={value}
              class="form-control"
              placeholder={placeholder} 
              required={required}/>
              <p className="help-block text-danger"></p>
            </div>
        </div>
    );
};

export default Input;