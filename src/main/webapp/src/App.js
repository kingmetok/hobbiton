import React from 'react';
import LandingMainPage from './components/LandingMainPage/LandingMainPage';
import './App.css';
import { Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';

export default function App() {
  return (
    <div className="wrapper">
      <Route exact path="/">
        <LandingMainPage />
      </Route>
      <Route path="/">
        <MainPage />
      </Route>
    </div>
  );
}
