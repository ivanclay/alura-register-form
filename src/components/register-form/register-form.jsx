import React, { useState } from 'react'

import PersonalData from './personal-data';
import UserData from './user-data';
import DeliveryAddress from './delivery-address';


function RegisterForm({onSubmit, isCpfValid}) {

    return ( 
        <>
            <PersonalData onSubmit={onSubmit} isCpfValid={isCpfValid}/>
            <UserData/>
            <DeliveryAddress/>
       </>
    );
}

export default RegisterForm;