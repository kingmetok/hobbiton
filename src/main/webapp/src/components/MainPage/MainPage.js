import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Dashboard from '../Dashboard/Dashboard';
import ProfilePage from '../ProfilePage/ProfilePage';
import LoginPage from '../LoginPage/LoginPage';
import './MainPage.css';
import { Route, Redirect } from 'react-router-dom';
import AddTask from '../AddTask/AddTask';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

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
		height: 'auto'
	}
}));

const MainPage = ({isLogged}) => {
	const classes = useStyles();
	console.log(isLogged);
	return (
		isLogged ?
		<Fragment>
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
			</div>
			<Footer /> 
		</Fragment>
	: null
	)
}
const mapStateToProps = state => {
	return {
		isLogged: state.authReducer.isLoggedIn,
	}
}

export default connect(mapStateToProps)(MainPage)
