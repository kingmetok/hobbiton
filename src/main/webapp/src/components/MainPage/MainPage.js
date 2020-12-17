import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MainPage.css';
import ProfilePage from '../ProfilePage/ProfilePage';
import { Route } from 'react-router-dom';

export default function MainPage() {
  return (
    <>
      <Header />
      <main className="main"></main>
      <Footer />
    </>
  );
}
