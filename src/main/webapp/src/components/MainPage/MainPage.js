import React, { Fragment, useState, useEffect } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsersInfoAction, searchUsersAction } from '../../redux/actions/user';
import { logoutAction } from '../../redux/actions/auth';
import ProfilePage from '../ProfilePage/ProfilePage';
import AddTask from '../AddTask/AddTask';
import Dashboard from '../Dashboard/Dashboard';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import TaskPage from '../TaskPage/TaskPage';
import NavLink from '../NavLink/NavLink';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../Logo/Logo';
import UserSearch from '../UserSearch/UserSearch';
import MockUserData from '../UserSearch/SearchMockData'; 
import {
  Button,
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  Toolbar,
  Typography,
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	infoPanel: {
		display: 'flex',
		justifyContent: 'space-between',
		marginLeft: 'auto',
		minWidth: '5em'
	},
	logoWrapper: {
		maxWidth:'150px' 
	},
	searchInput: {
		width: '20%',
		marginLeft: 'auto'
	},
	header: {
		flexWrap: 'wrap'
	}
}));

function MainPage(props) {
	const { window, logout, isLogged, userData, getUsersInfo, usersDataBySearch, searchUsers } = props;
	const classes = useStyles();
	const theme = useTheme();
	const history = useHistory();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	useEffect(() => {
		getUsersInfo();
		searchUsers();
	}, [searchUsers, getUsersInfo]);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleLogout = () => {
		logout();
		history.push('/');
	};

	const onSearchUserInput = (e) => {}
	const onSearchUserSelected = (e, newVal) => {
		if (!newVal) return;
		history.push(`/account/profile/${newVal.id}`);
  }


	const container = window !== undefined ? () => window().document.body : undefined;

	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				<NavLink text='DashBoard' url='/account/dashboard' />
				<NavLink text='Profile' url='/account/profile' />
				<NavLink text='Achievements' url='/account/achievements' />
				<NavLink text='Scoreboard' url='/account/scoreboard' />
			</List>
			<Divider />
		</div>
	);

	return (
			<div className = {classes.root} >
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar className={classes.header}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<div className={classes.logoWrapper}>
						<Logo/>
					</div>
					<Typography variant="h6" noWrap className={classes.welcome}>
						Hello, {userData.login.charAt(0).toUpperCase() + userData.login.slice(1)}
					</Typography>
					<div className={classes.searchInput}>
						<UserSearch
								options={{
									debounce: 500,
									label: "Search user",
									icon: true
								}} 
								candidates={usersDataBySearch}
								onInput={onSearchUserInput}
								onChange={onSearchUserSelected}
							/>
					</div>
					<div className={classes.infoPanel}>
						<Avatar>{userData.login.charAt(0).toUpperCase()}</Avatar>
						<Button onClick={handleLogout}>
							<ExitToAppIcon />
							logout
						</Button>
					</div>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Fragment>
					{!isLogged ?
						<Switch>
							<Route path="*">
								<Redirect to="/" />
							</Route>
						</Switch>
						:
						<Switch>
							<Route exact path="/account/dashboard">
								<Dashboard />
							</Route> 
							<Route exact path="/account/profile/:id">
								<ProfilePage />
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
							<Route exact path="/account/scoreboard">
								<ScoreBoard />
							</Route>
							<Route path="*">
								<Redirect to="/account/dashboard" />
							</Route>
						</Switch>
					}
				</Fragment>
			</main>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logoutAction());
		},
		getUsersInfo: () => {
			dispatch(getUsersInfoAction());
		},
		searchUsers: () => {
			dispatch(searchUsersAction())
		}
  };
};

const mapStateToProps = (state) => {
  return {
		isLogged: state.authReducer.isLoggedIn,
		userData: state.userReducer.userData,
		usersDataBySearch: state.userReducer.usersDataBySearch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
