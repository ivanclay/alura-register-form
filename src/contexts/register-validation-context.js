import React from 'react';

const RegisterValidationContext = React.createContext(
    // {
    //     cpf: noValidation, 
    //     password: noValidation,
    //     name: noValidation
    // }
);

const noValidation = (data) => {
    return {isValid: true, text: ""};
}

export default RegisterValidationContext;