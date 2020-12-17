import React from 'react';

const useStyles = makeStyles({
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

export default function LandingHeader() {
  const classes = useStyles();

  return <div></div>;
}
