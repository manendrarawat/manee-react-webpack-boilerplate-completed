import React, {Component} from 'react';
import FormContainer from './containers/FormContainer'

class App extends Component {

    render(){
        return(
            <div className="container">
                <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                   <FormContainer />
                </div>
                </div>
            </div>
        );
    }
    
}

export default App;
