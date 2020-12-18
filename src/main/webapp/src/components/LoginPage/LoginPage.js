import React from 'react';
import AuthForm from '../AuthForm/AuthForm';


const LoginPage = () => {
	return (
		<AuthForm
			link='/register'
			linkMessage="Don't have an account?"
			btnText='Sign In'
			action='Login'
		/>
	)
}

export default LoginPage;