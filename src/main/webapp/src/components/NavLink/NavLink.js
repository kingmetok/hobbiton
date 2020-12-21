import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ScoreIcon from '@material-ui/icons/Score';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
		activeLink: {
			color: theme.palette.primary.main,
		'& svg': {
				color: theme.palette.primary.main
			}
		},
	}
));

const NavLink = ({ text, url}) => {
	const history = useHistory();
	const classes = useStyles();
	const [activeClass, setActiveClass] = useState(text === 'Dashboard' ? classes.activeLink : '')
	useEffect(() => {
		const unListen = history.listen((location) => {
			setActiveClass(url === location.pathname ? classes.activeLink : '');
		})
		return function cleanup() {
			unListen();
		}
	});

	const renderListIcon = {
		'DashBoard': <DashboardIcon />,
		'Profile': <AccountCircleIcon />,
		'Achievements': <CardGiftcardIcon />,
		'Scoreboard': <ScoreIcon />
	}
	return (
		<ListItem
			className={ activeClass }
			button key={text}
			onClick={() => history.push(url)}>
			<ListItemIcon>
				{ renderListIcon[text] }
			</ListItemIcon>
		<ListItemText primary={text} />
	</ListItem>
	)
}

export default NavLink;