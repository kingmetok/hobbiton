import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import {
  CardContent,
  Card,
  Typography,
  Button,
  TextField,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';

const useStyles = makeStyles({
  authCard: {
    width: 400,
    marginTop: 100,
    margin: 'auto',
    // background: '#33c9dc'
  },
  root: {
    background: '#57bc90',
    width: '100%',
    height: '100vh',
    paddingTop: '8%',
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 50,
  },
  formAuth: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  field: {
    width: '100%',
    marginBottom: '20px',
  },
  button: {
    width: '100%',
    marginBottom: '20px',
    fontWeight: 700,
  },
  link: {
    marginBottom: '20px',
    display: 'block',
    width: '100%',
    textAlign: 'center',
  },
  radio: {
    padding: '20px 0',
  },
});

const AuthForm = ({ link, message, title, btnText }) => {
  const classes = useStyles();
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box className={classes.root}>
      <Logo />
      <Card className={classes.authCard}>
        <CardContent>
          <Typography
            color="textSecondary"
            component="h1"
            className={classes.title}
          >
            {title}
          </Typography>
          <form>
            {currentPath === 'register' ? (
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                name="name"
                className={classes.field}
              />
            ) : null}
            {currentPath === 'register' ? (
              <TextField
                id="login"
                label="Login"
                variant="outlined"
                name="login"
                className={classes.field}
              />
            ) : null}
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              name="email"
              className={classes.field}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              placeholder="******"
              name="password"
              className={classes.field}
            />
            {currentPath === 'register' ? (
              <FormControl component="fieldset" className={classes.radio}>
                <FormLabel component="legend">Your Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  row
                  name="gender"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            ) : null}
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              type="submit"
            >
              {btnText}
            </Button>
          </form>
          <Link className={classes.link} to={link}>
            {message}
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AuthForm;
