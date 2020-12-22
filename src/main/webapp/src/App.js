import React, {Fragment} from 'react';
import LandingMainPage from './components/LandingMainPage/LandingMainPage';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import MainPage from './components/MainPage/MainPage';
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

const App = ({ isLogged }) => {
	return (
		<Fragment>
			{!isLogged ?
				<Switch>
					<Route exact path="/login">
						<LoginPage />
					</Route>
					<Route exact path="/account/profile/:id">
						<ProfilePage />
					</Route> 
					<Route exact path="/register">
						<RegisterPage />
					</Route>
					<Route exact path="/">
						<LandingMainPage />
					</Route>
					<Route path="*">
						<Redirect to="/" />
					</Route>
				</Switch>
				:
				<Switch>
					<Route path="/account">
						<MainPage />
					</Route>
					<Route path="*">
						<Redirect to="/account" />
					</Route>
				</Switch>
			}
		</Fragment>
  );
}

const mapStateToProps = state => {
	return {
		isLogged: state.authReducer.isLoggedIn,
	}
}

export default connect(mapStateToProps)(App)
