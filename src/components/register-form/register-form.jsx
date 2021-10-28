import React, { useState, useEffect } from 'react'

import PersonalData from './personal-data';
import UserData from './user-data';
import DeliveryAddress from './delivery-address';


function RegisterForm({onSubmit, isCpfValid}) {
    const [currentStep, setCurrentStep] = useState(0);
    const [dataClient, setDataClient] = useState({});

    useEffect(() => {
       console.log(dataClient); 
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
        <PersonalData onSubmit={dataCollector} isCpfValid={isCpfValid}/>,
        <DeliveryAddress  onSubmit={dataCollector} />
    ]

    return ( 
        <>
            { forms[currentStep] }
       </>
    );
}

export default RegisterForm;