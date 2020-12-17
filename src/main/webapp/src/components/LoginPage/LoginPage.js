import React from 'react';
import AuthForm from '../AuthForm/AuthForm';


const LoginPage = () => {
	return (
		<AuthForm link='/register' message="Don't have an account?" title='Login' btnText='Sign In' />
	)
}

export default LoginPage;