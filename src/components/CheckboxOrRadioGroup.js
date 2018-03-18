import React from 'react';

const CheckboxOrRadioGroup = (props) => {

    return (
        <div className="form-group row">
            <label className="col-sm-2 col-for-label">{props.title} </label>
            <div className="col-sm-10">
                {
                    props.options.map((option) => {
                        return (
                            <label className="radio-inline" key={option}>
                                <input 
                                    type={props.type} 
                                    name={props.name} 
                                    value={option}
                                    onChange = {props.controlFunc}
                                    checked = {props.selectedOptions.indexOf(option) > -1}
                                     />{option}
                            </label>
                        );
                    })
                }
                
                <b>{props.additionalMessage}</b>
            </div>
        </div>
    );

}

export default CheckboxOrRadioGroup;