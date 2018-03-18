import React from 'react';


const SingleInput = (props) => {

    return (
        <div className="form-group row">
             <label className="col-sm-2 col-xs-2 col-md-2 col-for-label">{props.title}</label>
             <div className="col-sm-10 col-xs-10 col-md-10">
             <input type={props.inputType} 
                className="form-control" 
                name={props.name} 
                placeholder={props.placeholder} 
                value={props.content}
                onChange={props.controlFunc} />

             </div>
        </div>
    );
};

export default SingleInput;

