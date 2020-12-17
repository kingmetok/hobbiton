import React from 'react';
import LandingMainPage from './components/LandingMainPage/LandingMainPage';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProfilePage from './components/ProfilePage/ProfilePage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import { Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Route exact path="/">
          <LandingMainPage />
				</Route>
				<Route exact path="/login">
          <LoginPage />
				</Route>
				<Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </main>
      <Footer />
    </div>
  );
}
