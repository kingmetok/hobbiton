import React from 'react';
import ContentBox from '../ContentBox/ContentBox';
import { Paper, Grid } from '@material-ui/core';
import landingSettings from '../../utils/landingSettings';
import { makeStyles } from '@material-ui/core/styles';

import image1 from '../../img/1.jpg';
import image2 from '../../img/6.jpeg';
import image3 from '../../img/3.jpg';
import image4 from '../../img/4.jpg';
import image5 from '../../img/image5.jpg';
const useStyles = makeStyles(theme => ({
	paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
	},
}));

const HomeContent = () => {
	const classes = useStyles();
	return (
		<>
			<Grid item xs={12}>
				<Paper className={classes.paper}>
					<ContentBox
						image={image1}
						title={landingSettings.title1}
						textStyle={landingSettings.textStyles1}
						wrapperStyle={landingSettings.wrapperStyles1}
						description={landingSettings.description1}
					/>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Paper className={classes.paper}>
					<ContentBox
						image={image3}
						title={landingSettings.title3}
						textStyle={landingSettings.textStyles3}
						wrapperStyle={landingSettings.wrapperStyles3}
						description={landingSettings.description3}
					/>
				</Paper>
			</Grid>
		<Grid item xs={12}>
			<Paper className={classes.paper}>
				<ContentBox
					image={image4}
					title={landingSettings.title4}
					textStyle={landingSettings.textStyles4}
					wrapperStyle={landingSettings.wrapperStyles4}
					description={landingSettings.description4}
				/>
			</Paper>
		</Grid>
		<Grid item xs={12}>
			<Paper className={classes.paper}>
				<ContentBox
					image={image5}
					title={landingSettings.title2}
					description={landingSettings.description2}
					wrapperStyle={landingSettings.wrapperStyles2}
				/>
			</Paper>
		</Grid>
		<Grid item xs={12}>
			<Paper className={classes.paper}>
				<ContentBox
					image={image2}
					title={landingSettings.title5}
					textStyle={landingSettings.textStyles5}
					wrapperStyle={landingSettings.wrapperStyles5}
					description={landingSettings.description4}
				/>
			</Paper>
		</Grid>
		</>
	)
}

export default HomeContent;