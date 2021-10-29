const IsCpfValid = (cpf) => {
    if(cpf.length !== 11){
      return {isValid: false, text:"CPF must have 11 digits"};
    }else{
      return {isValid: true, text:""};
    }
}

const IsPasswordValid = (password) => {
    if(password.length < 4 || password.length > 20){
      return {isValid: false, text:"Password must be between 4 and 20 characters."};
    }else{
      return {isValid: true, text:""};
    }
}

export {IsCpfValid, IsPasswordValid}