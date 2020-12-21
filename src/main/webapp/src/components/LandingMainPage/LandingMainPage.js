import React from 'react';
import ContentBox from '../ContentBox/ContentBox';
import './LandingMainPage.css';
import landingSettings from '../../utils/landingSettings';
import { Button, Box, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Logo from '../Logo/Logo';

import image1 from '../../img/1.jpg';
import image2 from '../../img/2.jpg';
import image3 from '../../img/3.jpg';
import image4 from '../../img/4.jpg';

const useStyles = makeStyles(theme => (
	console.log(theme),{
  landingContentWrapper: {
    margin: '0 auto',
    width: '80%',
		},
	root: {
		width: '100%',
		overflow: 'hidden'
	},
  signupWrapper: {
    margin: '0 auto',
    backgroundColor: theme.palette.grey[300],
    width: '40%',
    padding: '4%',
    marginBottom: '100px',
    textAlign: 'center',
    fontFamily: theme.typography.fontFamily,
    borderRadius: '15px',
  },
  navigation: {
    marginLeft: '20px',
    paddingLeft: '10px',
    borderLeft: '1px solid',
	},
	paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
	},
	header: {
		backgroundColor: theme.palette.primary.main,
		display: 'flex',
		alignItems: 'center'
	},
	logoWrapper: {
		maxWidth: '200px'
	},
	btnLogin: {
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.getContrastText(theme.palette.primary.dark),
		marginLeft: 'auto'
	}
}));

function LandingMainPage(props) {
  const classes = useStyles();

  function changeRoute(path) {
    props.history.push(path);
  }

  function LogIn() {
    changeRoute('/login');
  }

	return (
		<div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
					<Paper className={`${classes.paper} ${classes.header}`}>
						<div className={classes.logoWrapper}>
							<Logo/>
						</div>
						<Box className={classes.navigation}>
              <Button onClick={() => changeRoute('/')}>Home</Button>
              <Button onClick={() => changeRoute('/about')}>About Us</Button>
						</Box>
						<Button onClick={LogIn} className={classes.btnLogin}>
            Sign In
          </Button>
					</Paper>
        </Grid>
        <Grid item xs={12}>
					<Paper className={classes.paper}>
						<ContentBox
							image={image1}
							text={landingSettings.text1}
							textStyle={landingSettings.textStyles1}
							wrapperStyle={landingSettings.wrapperStyles1}
						/>
					</Paper>
        </Grid>
        <Grid item xs={12}>
					<Paper className={classes.paper}>
						<ContentBox
							image={image3}
							text={landingSettings.text3}
							textStyle={landingSettings.textStyles3}
							wrapperStyle={landingSettings.wrapperStyles3}
						/>
					</Paper>
        </Grid>
        <Grid item xs={12}>
					<Paper className={classes.paper}>
						<ContentBox
							image={image4}
							text={landingSettings.text4}
							textStyle={landingSettings.textStyles4}
							wrapperStyle={landingSettings.wrapperStyles4}
						/>
					</Paper>
        </Grid>
        <Grid item xs={12}>
					<Paper className={classes.paper}>
						<ContentBox
							image={image2}
							text={landingSettings.text2}
							wrapperStyle={landingSettings.wrapperStyles2}
						/>
					</Paper>
        </Grid>
        <Grid item xs={12}>
					<Paper className={classes.paper}>
						<div className={classes.signupWrapper}>
							<p className="signupText">Try it out! Its completely free</p>
							<Button
								onClick={() => changeRoute('/register')}
								color="primary"
								variant="contained"
							>
								Sign Up
							</Button>
						</div>
					</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(LandingMainPage);
