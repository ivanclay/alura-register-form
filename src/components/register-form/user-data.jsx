import { TextField, Button  } from '@material-ui/core';
import React, { useState } from 'react'

function UserData({ onSubmit }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return ( 
        <form onSubmit={(event) => {
            event.preventDefault();
            onSubmit({email, password});
        }}>
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