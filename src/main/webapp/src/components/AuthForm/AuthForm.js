import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { connect } from 'react-redux';
import {
	authLoginAction,
	authRegisterAction
} from '../../redux/actions/auth';
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
    width: '100vw',
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

const AuthForm = ({ link, linkMessage, btnText, action, authRegister, authLogin}) => {
  const classes = useStyles();
	const [formData, setFormData] = useState({
		email: '',
		login: '',
		password: '',
		gender: 'female'
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (action === 'Register') {
			return authRegister(formData)
		}
		return authLogin({
			login: formData.login,
			password: formData.password
		});
	}

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
            {action}
          </Typography>
          <form onSubmit={handleSubmit}>
						{action === 'Register' ? (
						<TextField
							id="email"
							label="Email"
							variant="outlined"
							name="email"
							className={classes.field}
							defaultValue={formData.login}
							onChange={e => setFormData({...formData, email: e.target.value.trim()})}
						/>
            ) : null}
						<TextField
							id="login"
							label="Login"
							variant="outlined"
							name="login"
							className={classes.field}
							defaultValue={formData.login}
							onChange={e => setFormData({...formData, login: e.target.value.trim()})}
						/>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              placeholder="******"
              name="password"
							className={classes.field}
							defaultValue={formData.login}
							onChange={e => setFormData({...formData, password: e.target.value.trim()})}
            />
            {action === 'Register' ? (
							<FormControl
								component="fieldset"
								className={classes.radio}>
                <FormLabel component="legend">Your Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  row
                  name="gender"
                  value={formData.gender}
                  onChange={e => setFormData({...formData, gender: e.target.value.trim()})}
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
            {linkMessage}
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
};

const mapStateToProps = state => {
	return {
		// authReducer: state.authReducer.isLoggedIn,
		message: state.messageReducer.message
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		authLogin: (userData) => {
			dispatch(authLoginAction(userData))
		},
		authRegister: (userData) => {
			dispatch(authRegisterAction(userData))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
