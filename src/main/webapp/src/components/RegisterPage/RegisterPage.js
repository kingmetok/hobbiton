import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
const RegisterPage = () => {
	return (
		<AuthForm
			link='/login'
			message="I already have an account"
			btnText='Sign Up'
			action='Register'
		/>
	)
}

export default RegisterPage;