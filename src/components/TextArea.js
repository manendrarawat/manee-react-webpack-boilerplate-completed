import React from 'react';


const TextArea = (props) => {

    return (
        <div className="form-group row">
        <label className="col-sm-2 col-for-label">{props.title} </label>
        <div className="col-sm-10">
         <textarea 
                className="form-control" 
                rows={props.rows}
                name = {props.name}
                onChange= {props.controlFunc}
                placeholder = {props.placeholder}
                value = {props.content} />
		</div>
        
      </div>

    );

}

export default TextArea;