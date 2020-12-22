import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
		textAlign: 'center',
		userSelect: 'none',
		color: theme.palette.text.secondary,
		width: '100%'
	},
	imageWrapper: {
		width: '100px'
	},
	badge: {
		width: '100%',
		height: 'auto'
	},
	list: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	title: {
		margin: 'auto',
		marginBottom: '1em'
	}
}
));

const Achievements = ({achievementsList}) => {
	const classes = useStyles();

	const badgeList = achievementsList.map(item => {
		const imagePath = `../${item}`;
		return (
				<div className={classes.imageWrapper} key={imagePath}>
					<img src={imagePath} className={classes.badge} />
				</div>
		)
	}) 

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<h2 className={classes.title}>Your Badges</h2>
			<Grid item xs={12}>
					<Paper className={`${classes.paper} ${classes.list}`}>
						{badgeList}
				</Paper>
			</Grid>
		</Grid>
	</div>
	)
}

export default Achievements;
