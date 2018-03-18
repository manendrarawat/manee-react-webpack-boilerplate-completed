import React from 'react';

const Select = (props) => {

    return (
        <div className="form-group row">
            <label className="col-sm-2 col-xs-2 col-md-2 col-for-label">{props.title}</label>
            <div className="col-sm-10 col-xs-10 col-md-10">
            <select 
            name={props.name} 
            value={props.selectedOption}
            onChange={props.controlFunc}
            className="form-control">
            <option value="">{props.placeholder}</option>
            {props.options.map((opt)=>{
                    return (
                    <option key={opt} 
                    value={opt}>{opt}</option>);
            })}
        </select>
            </div>
        </div>
    );

}

export default Select;