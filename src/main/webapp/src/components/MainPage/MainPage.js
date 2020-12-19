import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Dashboard from '../Dashboard/Dashboard';
import ProfilePage from '../ProfilePage/ProfilePage';
import TaskPage from '../TaskPage/TaskPage';
import './MainPage.css';
import { Route } from 'react-router-dom';
import AddTask from '../AddTask/AddTask';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    width: '100%',
    height: 'auto',
  },
}));

export default function MainPage() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.root}>
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
      </div>
      <Footer />
    </>
  );
}
