import { TextField, Button  } from '@material-ui/core';
import React, { useState, useContext } from 'react'
import RegisterValidationContext from '../../contexts/register-validation-context';

function UserData({ onSubmit }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({password: {isValid:true, text:""}});

    const validations = useContext(RegisterValidationContext);

    const fieldsValidate = (event) => {
        const { name, value } = event.target;
        const newErrorsState = {...errors}
        newErrorsState[name] = validations[name](value);
        setErrors(newErrorsState)
    }

    const onSubmitForm = (event) => {
            event.preventDefault();
            if(canNavigateForm()){
                onSubmit({email, password});
            }
    }

    const canNavigateForm = () => {
        for(let field in errors){
            if(errors[field].isValid){
                return true;
            }
        }
        return false;
    }

    return ( 
        <form onSubmit={onSubmitForm}>
            <TextField 
                id="email" 
                label="e-mail" 
                type="email"
                required
                fullWidth
                variant="outlined" 
                margin="normal" 
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
            /> 
             <TextField 
                error={!errors.password.isValid}
                helperText={errors.password.text}
                onBlur={fieldsValidate} 
                name="password"
                id="password" 
                label="password" 
                type="password"
                required
                fullWidth
                variant="outlined" 
                margin="normal" 
                value={password}
                onChange={(event) => {setPassword(event.target.value)}}
            /> 
            <Button type="submit" variant="contained" color="primary">Next</Button>
        </form>
     );
}

export default UserData;