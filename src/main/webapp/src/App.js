import React, {Fragment} from 'react';
import LandingMainPage from './components/LandingMainPage/LandingMainPage';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ResponsiveDrawer from './components/Header2/Header2';
import { Route, Switch, Redirect, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const App = ({ isLogged }) => {
	// const { id, invite } = useParams();
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
