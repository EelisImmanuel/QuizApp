const validate=(values)=>{
    const errors={}
    if(!values.question){
        errors.question = 'Required'
    }
    if(!values.options || !values.options.length){
        errors.options = { _error: 'At least one option must be entered' }
    } else{
        const optionsArrayErrors = [];
        values.options.forEach((option, optionIndex)=>{
            const optionErrors = {};
            if(!option || !option.option){
                optionErrors.option = 'Enter an option';
                optionsArrayErrors[optionIndex] = optionErrors;
            }
            return optionErrors;
        })
        if(optionsArrayErrors.length) {
            errors.options = optionsArrayErrors;
          }
    }
    return errors
}

export default validate;