import React from 'react';
import LandingMainPage from './components/LandingMainPage/LandingMainPage';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProfilePage from './components/ProfilePage/ProfilePage';
import { Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Route exact path="/landing">
          <LandingMainPage />
        </Route>
        {/* <ProfilePage /> */}
      </main>
      <Footer />
    </div>
  );
}
