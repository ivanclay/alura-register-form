import React, { useState, useEffect } from 'react'

import PersonalData from './personal-data';
import UserData from './user-data';
import DeliveryAddress from './delivery-address';
import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';


function RegisterForm({onSubmit, validations}) {
    const [currentStep, setCurrentStep] = useState(0);
    const [dataClient, setDataClient] = useState({});

    useEffect(() => {
        if(currentStep === forms.length){
            onSubmit(dataClient);
        }
     }
    );

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    const dataCollector = (data) => {
        setDataClient({...dataClient, ...data});
        nextStep();
    }

    const forms = [
        <UserData  onSubmit={dataCollector} />,
        <PersonalData onSubmit={dataCollector} />,
        <DeliveryAddress  onSubmit={dataCollector}/>,
        <Typography align="center" variant="h5">Thank you for registering!</Typography>
    ]

    return ( 
        <>
            <Stepper activeStep={currentStep}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Personal Data</StepLabel></Step>
                <Step><StepLabel>Delivery Data</StepLabel></Step>
                <Step><StepLabel>Welcome</StepLabel></Step>
            </Stepper>
            { forms[currentStep] }
       </>
    );
}

export default RegisterForm;