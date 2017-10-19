import React, { Component } from 'react';
import { Field, FieldArray, reduxForm, reset} from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { newQuestion } from '../actions';

import Logo from './logo';
import validate from './validate/add_questions_validate';

const RenderField = (field) =>{
    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`
    return(
        <div className={className}>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
        {touched ? error : ''}
        </div>
    </div>
    )
}
const OptionValue = (field) => {
    return (<input type='checkbox' {...field.input}/>)
}

 
const RenderOptions = ({fields}) => {
    return (
        <div>
            <button
                type="button"
                className="btn btn-default customButton"
                onClick={() => fields.push({})}>+</button>
            {fields.map((option, index) => {
                return (
                    <div key={index}>
                        <div className="form-group row">
                            <label className="col-md-1 col-form-label ">Option {index + 1}</label>
                            <div className="col-md-10">
                                <Field
                                    name={`${option}.option`}
                                    type="text"
                                    component={RenderField}
                                    className="form-control optionform"/>
                            </div>

                            <div className="col-md-1 ">
                                <Field name={`${option}.value`} component={OptionValue}/>
                            </div>
                        </div>
                    </div>
                )
            })}
            {fields.error}

        </div>
    )
}


const AddQuestions = (props) => {
    const {handleSubmit} = props;
    return (
        <div className="container">

            <div className="row">
                <div className="col-md-6 text-xs-left"><Logo/></div>
                <div className="col-md-6 text-xs-right">
                    <Link className="btn btn-primary customButton" to="/">Back</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit((values) => props.newQuestion(values))}>
                <div className="form-group">
                    <Field name="question" component={RenderField} label="New question"/>
                    <FieldArray name="options" component={RenderOptions}/>

                </div>
                <button type="submit" className="btn btn-primary customButton">Submit</button>
            </form>
        </div>

    )
}
//Clear fields after submitting
const afterSubmit = (result, dispatch) =>
dispatch(reset('newQuestion'));

export default reduxForm({
    validate,
    form: 'newQuestion',
    onSubmitSuccess: afterSubmit
  })(     
   connect(null,{newQuestion})(AddQuestions)
)

