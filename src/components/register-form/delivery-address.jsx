import { TextField, Button  } from '@material-ui/core';
import React from 'react'

function DeliveryAddress() {
    return ( 
        <form>
            <TextField 
                id="cep" 
                label="CEP" 
                type="number"
                variant="outlined" 
                //fullWidth
                margin="normal" 
            /> 
             <TextField 
                id="address" 
                label="Address" 
                type="text"
                variant="outlined" 
                fullWidth
                margin="normal" 
            /> 
             <TextField 
                id="number" 
                label="Number" 
                type="number"
                variant="outlined" 
                //fullWidth
                margin="normal" 
            /> 
            <TextField 
                id="state" 
                label="State" 
                type="text"
                variant="outlined" 
                //fullWidth
                margin="normal" 
            /> 
            <TextField 
                id="city" 
                label="City" 
                type="text"
                variant="outlined" 
                //fullWidth
                margin="normal" 
            /> 
            <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
        </form>
     );
}

export default DeliveryAddress;