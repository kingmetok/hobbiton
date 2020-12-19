import React, { Fragment } from 'react';
import LandingMainPage from './components/LandingMainPage/LandingMainPage';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, Redirect } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';

export default function App() {
  return (
    <Fragment>
      <Route exact path="/">
        <LandingMainPage />
      </Route>
      <Route path="/account">
        <MainPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
			</Route>
			<Redirect to='/'/>
    </Fragment>
  );
}
