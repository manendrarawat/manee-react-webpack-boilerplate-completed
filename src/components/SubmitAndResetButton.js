import React from 'react';

const SubmitAndResetButton = (props) => {

    return (
        <div className="row">
            <div className="col-sm-6">
                <button 
                className="btn btn-primary"
                onClick ={props.controlResetFunc}
                >Reset</button>
            </div>
            <div className="col-sm-6">
                <button  
                    className="btn btn-primary"
                    onClick ={props.controlSubmitFunc}
                    >Submit</button>
            </div>
        </div>
    );
}

export default SubmitAndResetButton;