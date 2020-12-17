import React from 'react';
import ContentBox from '../ContentBox/ContentBox';
import './LandingMainPage.css';
import landingSettings from '../../utils/landingSettings';
import { Button, Box } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import image1 from '../../img/1.jpg';
import image2 from '../../img/2.jpg';
import image3 from '../../img/3.jpg';
import image4 from '../../img/4.jpg';

const useStyles = makeStyles({
  landingContentWrapper: {
    margin: '0 auto',
    width: '80%',
  },
  signupWrapper: {
    margin: '0 auto',
    backgroundColor: 'rgb(173, 173, 173)',
    width: '40%',
    padding: '4%',
    marginBottom: '100px',
    textAlign: 'center',
    fontFamily: 'Roboto',
    borderRadius: '15px',
  },
  landingWrapper: {
    width: '100%',
  },
  landingHeader: {
    width: '100%',
    paddingTop: '10px',
    paddingBottom: '10px',
    backgroundColor: 'rgb(255, 255, 255)',
    borderBottom: '1px solid gray',
    marginBottom: '10px',
  },
  landingHeaderWraper: {
    width: '95%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  landingfooter: {
    width: '100%',
    background: 'rgb(34, 34, 34)',
  },
  landingfooterLogo: {
    width: '100%',
    color: 'white',
    padding: '10px 50px',
  },
  headerLogo: {
    color: 'black',
  },
  headerLogoPart: {
    background: 'red',
    padding: '2px 5px',
    borderRadius: '5px',
    marginRight: '2px',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  navigation: {
    marginLeft: '20px',
    paddingLeft: '10px',
    borderLeft: '1px solid',
  },
});

function LandingMainPage(props) {
  const classes = useStyles();

  function changeRoute(path) {
    props.history.push(path);
  }

  function LogIn() {
    changeRoute('/auth');
  }

  return (
    <Box className={classes.landingWrapper}>
      <Box className={classes.landingHeader}>
        <Box className={classes.landingHeaderWraper}>
          <Box className={classes.logoWrapper}>
            <h2 className={classes.headerLogo}>
              <Box component="span" className={classes.headerLogoPart}>
                BE
              </Box>
              BETTER
            </h2>

            <Box className={classes.navigation}>
              <Button onClick={() => changeRoute('/')}>Home</Button>
              <Button onClick={() => changeRoute('/about')}>About Us</Button>
            </Box>
          </Box>

          <Button onClick={LogIn} color="primary" variant="outlined">
            Sign In
          </Button>
        </Box>
      </Box>
      <Box className={classes.landingContentWrapper}>
        <ContentBox
          image={image1}
          text={landingSettings.text1}
          textStyle={landingSettings.textStyles1}
          wrapperStyle={landingSettings.wrapperStyles1}
        />
        <ContentBox
          image={image2}
          text={landingSettings.text2}
          textStyle={landingSettings.textStyles2}
          wrapperStyle={landingSettings.wrapperStyles2}
        />
        <ContentBox
          image={image3}
          text={landingSettings.text3}
          textStyle={landingSettings.textStyles3}
          wrapperStyle={landingSettings.wrapperStyles3}
        />
        <ContentBox
          image={image4}
          text={landingSettings.text4}
          textStyle={landingSettings.textStyles4}
          wrapperStyle={landingSettings.wrapperStyles4}
        />
      </Box>
      <div className={classes.signupWrapper}>
        <p className="signupText">Try it out! Its completely free</p>
        <Button
          onClick={() => changeRoute('/auth')}
          color="primary"
          variant="contained"
        >
          Sign Up
        </Button>
      </div>
    </Box>
  );
}

export default withRouter(LandingMainPage);
