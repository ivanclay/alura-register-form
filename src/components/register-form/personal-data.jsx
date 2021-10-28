import React, { useState } from 'react'
import { TextField, Button, Switch, FormControlLabel  } from '@material-ui/core';


function PersonalData({onSubmit, isCpfValid}) {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [cpf, setCpf] = useState("");
    const [promotions, setPromotions] = useState(true);
    const [newsletter, setNewsletter] = useState(true);
    const [errors, setErrors] = useState({cpf: {isValid:true, text:""}});

    return ( 
        <form onSubmit={(event) => {
            event.preventDefault();
            onSubmit({name, surname, cpf, promotions, newsletter});
        }}>
            <TextField 
                value={name}
                onChange={(event) => {setName(event.target.value)}}
                id="name" 
                label="Name" 
                variant="outlined" 
                required
                fullWidth
                margin="normal" 
            /> 
            <TextField 
                 value={surname}
                 onChange={(event) => {setSurname(event.target.value)}}
                id="surname" 
                label="Surname" 
                variant="outlined" 
                required
                fullWidth 
                margin="normal" 
            /> 
            <TextField 
                error={!errors.cpf.isValid}
                helperText={errors.cpf.text}
                onBlur={(event) => {
                    const isValid = isCpfValid(cpf);
                    setErrors({cpf: isValid})
                }}
                value={cpf}
                onChange={(event) => {setCpf(event.target.value)}}
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                required
                fullWidth
                margin="normal" 
            /> 

            <FormControlLabel 
                label="Promotions"  
                control={
                            <Switch 
                                name="promotions"  
                                checked={promotions}
                                onChange={(event) => {setPromotions(event.target.checked)}}
                            />
                        }
            />

            <FormControlLabel 
                label="News Letter"  
                control={
                            <Switch 
                                name="news-letter" 
                                checked={newsletter} 
                                onChange={(event) => {setNewsletter(event.target.checked)}} 
                            />
                        }
            />

            
            
            
            <Button type="submit" variant="contained" color="primary">Next</Button>
        </form>  
    );
}

export default PersonalData;