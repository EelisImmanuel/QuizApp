import React, { Component } from 'react';
import { Field, FieldArray, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { newQuestion } from '../actions';
import Logo from './logo';


class AddQuestions extends Component{
    constructor(props){
        super(props)
        this.renderField = this.renderField.bind(this);
    }
   
    renderField(field){
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
            </div>
        )
    }
    renderOptions({ fields }){
        return(      
            <div>         
                 <button type="button" className="btn btn-default" onClick={() => fields.push({})}>+</button>
                 {fields.map((option, index)=>
                 <div key={index} >
                     <label className="col-sm-2 control-label">Option {index + 1}</label>
                     <div className="col-sm-10">
                    <Field 
                    name={`${option}.option`}
                    type="text"
                    label=""
                    component={ this.renderField }
                    className="form-control optionform"
                    />
                    </div>
                 </div>
                 )}
                
             </div>

        )
    }
    onSubmit(values){
        this.props.newQuestion(values);
    }    
    render(){
        const { handleSubmit } = this.props;

        return(
            <div className="container">
               
               <div className="row">
                    <div className="col-md-6 text-xs-left"><Logo /></div>
                    <div className="col-md-6 text-xs-right"><Link className="btn btn-primary customButton" to="/">Back</Link></div>
                </div>
                <form className="form-horizontal" onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                    <div className="form-group">
                    <Field name="question" component={this.renderField} label="New question" />                   
                    <FieldArray name="options" component={this.renderOptions} />   
                    <button type="submit" className="btn btn-primary customButton">Submit</button>    
                    </div>
                </form>
            </div>
        )
    }
}
                

export default reduxForm({
    form: 'newQuestion'
  })(     
   connect(null,{newQuestion})(AddQuestions)
)