import { TextField, Button  } from '@material-ui/core';
import React, { useState, useContext } from 'react'
import RegisterValidationContext from '../../contexts/register-validation-context';
import useErrors from '../../hooks/useErrors';

function DeliveryAddress({ onSubmit }) {
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [state, setState] = useState(true);
    const [city, setCity] = useState(true);

    const validations = useContext(RegisterValidationContext);
    const [errors, fieldsValidate, canNavigateForm ] = useErrors(validations);

    const onSubmitForm = (event) => {
        event.preventDefault();
        if(canNavigateForm()){
            onSubmit({cep, address, number, state, city});
        }
}

    return ( 
        <form onSubmit={onSubmitForm}>
            <TextField 
                id="cep" 
                label="CEP" 
                type="number"
                variant="outlined" 
                //fullWidth
                margin="normal" 
                value={cep}
                onChange={(event) => {setCep(event.target.value)}}
            /> 
             <TextField 
                id="address" 
                label="Address" 
                type="text"
                variant="outlined" 
                fullWidth
                margin="normal" 
                value={address}
                onChange={(event) => {setAddress(event.target.value)}}
            /> 
             <TextField 
                id="number" 
                label="Number" 
                type="number"
                variant="outlined" 
                //fullWidth
                margin="normal" 
                value={number}
                onChange={(event) => {setNumber(event.target.value)}}
            /> 
            <TextField 
                id="state" 
                label="State" 
                type="text"
                variant="outlined" 
                //fullWidth
                margin="normal" 
                value={state}
                onChange={(event) => {setState(event.target.value)}}
            /> 
            <TextField 
                id="city" 
                label="City" 
                type="text"
                variant="outlined" 
                //fullWidth
                margin="normal" 
                value={city}
                onChange={(event) => {setCity(event.target.value)}}
            /> 
            <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
        </form>
     );
}

export default DeliveryAddress;