import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../img/logoDarkGreen.svg';

const useStyles = makeStyles({
	image: {
		width: '100%',
		height: 'auto'
	},
});

const Logo = () => {
	const classes = useStyles();
	return (
			<img className={classes.image } src={logo} alt='logo'/>
	)
}

export default Logo;