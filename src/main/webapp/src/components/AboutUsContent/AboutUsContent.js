import React from 'react';
import ContentBox from '../ContentBox/ContentBox';
import { Paper, Grid } from '@material-ui/core';
import landingSettings from '../../utils/landingSettings';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
	aboutContent: {
		fontSize: '1.2em'
	},
	title: {
		textAlign: 'center',
		color: theme.palette.secondary.main,
		fontSize: '2em',
		marginBottom: '1em',
	},
	accent: {
		fontSize: '1.4em'
	},
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary,
		height: '100%'
	},
	list: {
		listStyle: 'none',
		width: '80%',
		margin: 'auto',
	},
	listItem: {
		marginBottom: '1em',
	},
	itemTitle: {
		textAlign: 'center',
		marginBottom: '0.5em'
	},
	description: {
		fontSize: '1.2em',
		width: '80%',
		margin: 'auto',
	},
	subTitle: {
		marginBottom: '1em',
		textAlign: 'center'
	}
}));

const AboutUsContent = () => {
	const classes = useStyles();
	return (
		<Grid item xs={12}>
		<Paper className={classes.paper}>
		<h2 className={classes.title}>Our mission</h2>
				<h3 className={classes.subTitle}>Form a habit, or the 21:40:90 rule</h3>
				<ul className={classes.list}>
					<li className={classes.listItem}>
						<h3 className={classes.itemTitle}>Point 1</h3>
						<p className={classes.description}>So, you need to practice your habit not for 21 days, but for 90 days. Then it is guaranteed to become part of your favorite and simply necessary actions. During this time, the habit goes through 3 main stages and methodically, gradually becomes fixed.</p>
					</li>
					<li className={classes.listItem}>
					<h3 className={classes.itemTitle}>Point 2</h3>
						<p className={classes.description}>During the first 3 weeks, new neural connections are formed in the brain, which will provide the need for this habit in the future. But, the process itself requires effort and literally gigantic willpower in order not to give up.</p>
					</li>
					<li className={classes.listItem}>
					<h3 className={classes.itemTitle}>Point 3</h3>
						<p className={classes.description}>And here it is, the 21st day is marked by the formation and consolidation of the habit. But! An old habit (for example, not running in the morning and sleeping until 10:00, eating at night) has not gone anywhere. Her neural connections are still very strong and can defeat a healthy habit again.</p>
					</li>
					<li className={classes.listItem}>
					<h3 className={classes.itemTitle}>Point 4</h3>
						<p className={classes.description}>And this means that in no case should you stop, and if you held out for 21 days, you will hold out for 19 more! And so you need to reach 90 days. It takes about 3 months in total for your new habit to become truly dear and necessary, like air. It will move into the category of automatic ones that do not require special volitional efforts.</p>
					</li>
				</ul>
		</Paper>
	</Grid>
	)
}

export default AboutUsContent;