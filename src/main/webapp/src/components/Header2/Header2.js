import React, {Fragment} from 'react';
import { Route, Switch, useHistory, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutAction } from '../../redux/actions/auth';
import ProfilePage from '../ProfilePage/ProfilePage';
import AddTask from '../AddTask/AddTask';
import Dashboard from '../Dashboard/Dashboard';
import TaskPage from '../TaskPage/TaskPage';
import NavLink from '../NavLink/NavLink';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../Logo/Logo';
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
	}
}));

function ResponsiveDrawer(props) {
	const { window, logout, isLogged } = props;
	const classes = useStyles();
	const theme = useTheme();
	const history = useHistory();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleLogout = () => {
		logout();
		history.push('/login');
	}



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

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
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
					<Typography variant="h6" noWrap>
						Hello, 
					</Typography>
					<div className={classes.infoPanel}>
						<Avatar>N</Avatar>
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
		}
	}
}

const mapStateToProps = state => {
	return {
		isLogged: state.authReducer.isLoggedIn,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);