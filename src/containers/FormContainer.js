import React, {Component} from 'react';
import SingleInput from '../components/SingleInput';
import Select from '../components/Select';
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
import TextArea from '../components/TextArea';
import SubmitAndResetButton from '../components/SubmitAndResetButton';


class FormContainer extends Component {

    constructor(){
        super();
        console.log('constructor invoked');
        this.state = {
            name : '',
            ageOptions : [],
            ownerAgeRangeSelection : '',
            siblingOptions: [],
            siblingSelection: [],
            description : '',
            petSelections : [],
            selectedPets : []
        } 

        this.handleFullNameChange = this.handleFullNameChange.bind(this);
        this.handleAgeRangeSelect = this.handleAgeRangeSelect.bind(this);
        this.handleSiblingsSelection = this.handleSiblingsSelection.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.checkInputRefValue = this.checkInputRefValue.bind(this);
        this.handleSecurityQuestion = this.handleSecurityQuestion.bind(this);
    }

    componentWillMount(){
        console.log('componentWillMount invoked');
    }

    componentDidMount(){
        console.log('componentDidMount invoked');
        fetch('./fake_db.json').then(res => res.json()).then( (data) => {

            console.log('>>>>>>>>>>>>>>>>', data);
            this.setState({
                name : data.name,
                ageOptions: data.ageOptions,
                ownerAgeRangeSelection: data.ownerAgeRangeSelection,
                siblingOptions: data.siblingOptions,
                siblingSelection: data.siblingSelection,
                petSelections: data.petSelections,
                selectedPets: data.selectedPets,
            });
        });
    }

    handleFullNameChange(e) {
      this.setState({ name : e.target.value}, () => { console.log(this.state.name)});
      
    }

    handleAgeRangeSelect(e){
        this.setState({ownerAgeRangeSelection : e.target.value}, 
            () => console.log('age range', this.state.ownerAgeRangeSelection))
    }

    handleSiblingsSelection(e){
        
        this.setState({ siblingSelection: [e.target.value] }, 
            () => console.log('siblingz', this.state.siblingSelection));
    }

    handleDescriptionChange(e){
        this.setState({description : e.target.value}, () => {console.log('Address', this.state.description)})
    }

    handleClearForm(e) {
		e.preventDefault();
		this.setState({
			name : '',
            ownerAgeRangeSelection : '',
            siblingSelection: ['male'],
            description : ''
		});
    }
    
    handleFormSubmit(e){
        e.preventDefault();

        const formPayload = {
            name : this.state.name,
            age : this.state.ownerAgeRangeSelection,
            gender: this.state.siblingSelection,
            description : this.state.description
        }

        console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(e);
    }

    checkInputRefValue(){
		console.log (this.refInput.value)
    }
    
        handleSecurityQuestion(e){
            const newSelection = e.target.value;
            let newSelectionArray;
            if(this.state.selectedPets.indexOf(newSelection) > -1){
                newSelectionArray = this.state.selectedPets.filter((s) =>  {
                    return (s !== newSelection);
                });
            }
            else{
                newSelectionArray = [...this.state.selectedPets, newSelection];
            }
            this.setState({ selectedPets: newSelectionArray }, () => console.log('pet selection', this.state.selectedPets));
        }

    render (){
        console.log('Render invoked');
        return (
            <div>
                <h3>Employee Registration form</h3>
                <SingleInput 
                    inputType = {'text'}
                    title = {'Name : '}
                    name = {'name'}
                    placeholder = {'Enter Name'}
                    content = {this.state.name}
                    controlFunc = {this.handleFullNameChange}
                />
                <Select 
                name= {'age'} 
                title = {'Age : '}
                placeholder={'Choose your age range'}
                controlFunc={this.handleAgeRangeSelect}
                options={this.state.ageOptions}
                selectedOption = {this.state.ownerAgeRangeSelection}
                />
                <CheckboxOrRadioGroup 
                title = {'Gender : '}
                type={'radio'}
                name={'gender'}
                controlFunc={this.handleSiblingsSelection}
                options={this.state.siblingOptions}
                selectedOptions={this.state.siblingSelection}
                />
                <CheckboxOrRadioGroup 
                title = {'Security Question : '}
                type={'checkbox'}
                name={'securityQuestion'}
                controlFunc={this.handleSecurityQuestion}
                options={this.state.petSelections}
                selectedOptions={this.state.selectedPets}
                additionalMessage ={'(Which kinds of pets would you like to adopt?)'}
                />
                <TextArea 
                    title = {'Address : '}
                    rows ={5}
                    name={'address'}
                    placeholder = {'Please enter your Address'}
                    content = {this.state.description}
                    controlFunc = {this.handleDescriptionChange}
                />
                <SubmitAndResetButton 
                controlResetFunc = {this.handleClearForm}
                controlSubmitFunc = {this.handleFormSubmit}
                />

                <div className="form-group row">
                <div className="col-sm-12 col-xs-12 col-md-12">
                 <h4>Uncontrolled Component Example :</h4>
                <input type="text" className="form-control" ref = {(input) => {this.refInput = input; }}/>
				<br />
                <button className="btn btn-primary" onClick={this.checkInputRefValue} >CheckRef Example </button>
                </div>
                </div>
                
				

            </div> 
        );
    }

}

export default FormContainer;