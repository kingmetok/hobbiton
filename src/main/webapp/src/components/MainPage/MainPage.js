import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Dashboard from '../Dashboard/Dashboard';
import ProfilePage from '../ProfilePage/ProfilePage';
import TaskPage from '../TaskPage/TaskPage';
import './MainPage.css';
import { Route } from 'react-router-dom';
import AddTask from '../AddTask/AddTask';

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
        <Route exact path="/account/addnew">
          <AddTask />
        </Route>
        <Route exact path="/account/goals/:id">
          <TaskPage />
        </Route>
      </main>
      <Footer />
    </>
  );
}
