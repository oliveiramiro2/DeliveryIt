import React from 'react';
import { LoginHome } from '../login/login';
import { RegisterHome } from '../register/register';

export const RedirectRegisterLogin: React.FC = () => (
    <>
        <RegisterHome />
        <LoginHome />
    </>
);
