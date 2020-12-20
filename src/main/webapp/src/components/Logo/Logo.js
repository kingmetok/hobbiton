import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../img/logoDarkGreen.svg';

const useStyles = makeStyles({
  logo: {
		width: '20%',
		margin: '0',
	},
	image: {
		width: '100%',
		height: 'auto'
	},
});

const Logo = () => {
	const classes = useStyles();
	return (
		<Typography component='h1' className={classes.logo}>
			<img className={classes.image } src={logo} alt='logo'/>
		</Typography>
	)
}

export default Logo;