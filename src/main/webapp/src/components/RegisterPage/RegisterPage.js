import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
const RegisterPage = () => {
	return (
		<AuthForm
			link='/login'
			linkMessage="I already have an account"
			btnText='Sign Up'
			action='Register'
		/>
	)
}

export default RegisterPage;