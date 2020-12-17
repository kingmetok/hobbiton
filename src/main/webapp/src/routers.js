import React from 'react';
import { Switch, Route, Redirect }from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

export const UserRoutes = () => {
	return (
		<Switch>
			<Route path='/' component={App} exact />
			<Route path='/login' component={LoginPage} exact />
			<Route path='/register' component={RegisterPage} exact/>
			<Redirect to='/'/>
		</Switch>
	)
}
