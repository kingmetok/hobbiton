import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
const RegisterPage = () => {
	return (
		<AuthForm link='/login' message="I already have an account" title='Register' btnText='Sign Up'/>
	)
}

export default RegisterPage;