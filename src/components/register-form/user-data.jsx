import { TextField, Button  } from '@material-ui/core';
import React, { useState, useContext } from 'react'
import RegisterValidationContext from '../../contexts/register-validation-context';
import useErrors from '../../hooks/useErrors';

function UserData({ onSubmit }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validations = useContext(RegisterValidationContext);

    const [errors, fieldsValidate, canNavigateForm ] = useErrors(validations);


    const onSubmitForm = (event) => {
            event.preventDefault();
            if(canNavigateForm()){
                onSubmit({email, password});
            }
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