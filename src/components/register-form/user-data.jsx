import { TextField, Button  } from '@material-ui/core';
import React from 'react'

function UserData({ onSubmit }) {
    return ( 
        <form onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
        }}>
            <TextField 
                id="email" 
                label="e-mail" 
                type="email"
                required
                fullWidth
                variant="outlined" 
                margin="normal" 
            /> 
             <TextField 
                id="password" 
                label="password" 
                type="password"
                required
                fullWidth
                variant="outlined" 
                margin="normal" 
            /> 
            <Button type="submit" variant="contained" color="primary">Next</Button>
        </form>
     );
}

export default UserData;