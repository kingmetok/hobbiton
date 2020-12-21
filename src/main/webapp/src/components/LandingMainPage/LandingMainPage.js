import React from 'react';
import { Button, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter} from 'react-router-dom';
import Logo from '../Logo/Logo';
import AboutUsContent from '../AboutUsContent/AboutUsContent';
import HomeContent from '../HomeContent/HomeContent';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
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
	},
	accent: {
		color: theme.palette.secondary.main,
	},
	copyright: {
		display: 'flex',
		alignItems: 'center',
		width: 'fit-content',
		margin: 'auto'
	},
	signUpText: {
		marginBottom: '15px'
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
							<p className={classes.signUpText}>Try it out! Its completely free</p>
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
								<p>Created with Love by
							<span className={classes.accent}> Yellow Team</span>
							</p>
							<FavoriteIcon color='error'/>
							</div>
					</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(LandingMainPage);
