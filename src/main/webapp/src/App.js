import React from 'react';
import LandingMainPage from './components/LandingMainPage/LandingMainPage';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ResponsiveDrawer from './components/Header2/Header2';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const App = ({ isLogged }) => {
	return (
		<Switch>
			<Route exact path="/">
				{isLogged ? <Redirect to="/account" /> : <LandingMainPage />}
			</Route>
      <Route path="/account">
				<ResponsiveDrawer/>
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
			</Route>
		</Switch>
  );
}

const mapStateToProps = state => {
	return {
		isLogged: state.authReducer.isLoggedIn,
	}
}

export default connect(mapStateToProps)(App)
