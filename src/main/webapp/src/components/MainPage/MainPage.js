import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Dashboard from '../Dashboard/Dashboard';
import ProfilePage from '../ProfilePage/ProfilePage';
import './MainPage.css';
import { Route } from 'react-router-dom';

export default function MainPage() {
  return (
    <>
      <Header />
      <main className="main">
        <Route exact path="/account/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/account/profile">
          <ProfilePage />
        </Route>
      </main>
      <Footer />
    </>
  );
}
