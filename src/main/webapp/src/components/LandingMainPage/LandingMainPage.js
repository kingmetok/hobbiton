import React from 'react';
import { Button, Paper, Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Logo from '../Logo/Logo';
import AboutUsContent from '../AboutUsContent/AboutUsContent';
import HomeContent from '../HomeContent/HomeContent';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from './LandingMainPageStyles';

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
              <Logo />
            </div>
            <Button onClick={LogIn} className={classes.btnLogin}>
              Sign In
            </Button>
          </Paper>
        </Grid>
        <HomeContent />
        <AboutUsContent />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.signupWrapper}>
              <p className={classes.signUpText}>
                Try it out! Its completely free
              </p>
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
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.copyright}>
              <p>
                Created with Love by
                <span className={classes.accent}> Yellow Team</span>
              </p>
              <FavoriteIcon color="error" />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(LandingMainPage);
