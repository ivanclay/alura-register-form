import React from 'react';
import './App.css';
import RegisterForm from './components/register-form/register-form';
import { Container, Typography  } from '@material-ui/core';
import 'fontsource-roboto';

function App() {

  const onSubmitForm = (data) => {
    console.log(data);
  }

  const isCpfValid = (cpf) => {
      if(cpf.length !== 11){
        return {isValid: false, text:"CPF must have 11 digits"};
      }else{
        return {isValid: true, text:""};
      }
  }

  return (
    <Container component="article" maxWidth="sm">
       <Typography variant="h3" component="h1" align="center">Register Form</Typography>
       <RegisterForm onSubmit={onSubmitForm} isCpfValid={isCpfValid}/>
    </Container>
  );
}

export default App;
