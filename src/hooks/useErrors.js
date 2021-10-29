import React, { useState } from 'react';

const useErrors = (validations) => {

    const initialState = createInitialState(validations);

    const [errors, setErrors] = useState(initialState);
    
    const fieldsValidate = (event) => {
        const { name, value } = event.target;
        const newErrorsState = {...errors}
        newErrorsState[name] = validations[name](value);
        setErrors(newErrorsState)
    }

    const canNavigateForm = () => {
        for(let field in errors){
            if(errors[field].isValid){
                return true;
            }
        }
        return false;
    }

    return [errors, fieldsValidate, canNavigateForm ];
}

const createInitialState = (validations) => {
    const initialState = {};
    for (let field in validations) {
        initialState[field] = { isValid: true, text: ""};
    }
    return initialState;
}

export default useErrors;