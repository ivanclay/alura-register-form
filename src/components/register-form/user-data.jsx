import { TextField, Button  } from '@material-ui/core';
import React from 'react'

function UserData() {
    return ( 
        <form>
            <TextField 
                id="email" 
                label="e-mail" 
                type="email"
                variant="outlined" 
                fullWidth
                margin="normal" 
            /> 
             <TextField 
                id="password" 
                label="password" 
                type="password"
                variant="outlined" 
                fullWidth
                margin="normal" 
            /> 
            <Button type="submit" variant="contained" color="primary">Register</Button>
        </form>
     );
}

export default UserData;