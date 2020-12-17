import React from 'react';
import LandingMainPage from './components/LandingMainPage/LandingMainPage';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import { Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';

export default function App() {
  return (
    <div className="wrapper">
      <main className="main">
        <Route exact path="/">
          <LandingMainPage />
        </Route>
        <Route exact path="/dashboard">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
      </main>
    </div>
  );
}
