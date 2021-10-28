import React, { useState } from 'react'

import PersonalData from './personal-data';
import UserData from './user-data';
import DeliveryAddress from './delivery-address';


function RegisterForm({onSubmit, isCpfValid}) {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    const forms = [
        <UserData  onSubmit={nextStep} />,
        <PersonalData onSubmit={nextStep} isCpfValid={isCpfValid}/>,
        <DeliveryAddress  onSubmit={onSubmit} />
    ]

    return ( 
        <>
            { forms[currentStep] }
       </>
    );
}

export default RegisterForm;