import React from 'react';
import './App.css';
import RegisterForm from './components/register-form/register-form';
import { Container, Typography  } from '@material-ui/core';
import 'fontsource-roboto';
import { IsCpfValid, IsPasswordValid } from './models/register-validation';
import RegisterValidationContext from './contexts/register-validation-context';

function App() {

  const onSubmitForm = (data) => {
    console.log(data);
  }

  return (
    <Container component="article" maxWidth="sm">
       <Typography variant="h3" component="h1" align="center">Register Form</Typography>
       <RegisterValidationContext.Provider value={{cpf:IsCpfValid, password: IsPasswordValid}}>
            <RegisterForm onSubmit={onSubmitForm} />
       </RegisterValidationContext.Provider>
    </Container>
  );
}

export default App;
