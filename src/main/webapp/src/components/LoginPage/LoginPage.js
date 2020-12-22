import React, {useEffect} from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { connect } from 'react-redux';
import {
	setIsRegisterAction
} from '../../redux/actions/auth';


const LoginPage = ({setIsRegister}) => {
	useEffect(() => {
		setIsRegister()
	},[]);

	return (
		<AuthForm
			link='/register'
			linkMessage="Don't have an account?"
			btnText='Sign In'
			action='Login'
		/>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		setIsRegister: () => {
			dispatch(setIsRegisterAction())
		},
	}
}
export default connect(null, mapDispatchToProps)(LoginPage);