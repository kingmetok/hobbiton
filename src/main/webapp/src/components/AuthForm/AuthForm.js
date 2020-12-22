import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { connect } from 'react-redux';
import useStyles from './AuthFormStyle';
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


const AuthForm = (props) => {
	const { link, linkMessage, btnText, action, authRegister, authLogin, isLogged, isRegister } = props;
	const classes = useStyles();
	const [formData, setFormData] = useState({
		email: '',
		login: '',
		password: '',
		gender: 'female'
	});
	const [helperText, setHelperText] = useState({
		emailError: '',
		loginError: '',
		passwordError: ''
	});
	const history = useHistory();


	const handleSubmit = (e) => {
		e.preventDefault();
		if (action === 'Register' && validateFormData(formData)) {
			return;
		};
		action === 'Register' ? handleRegister() : handleLogin();
	}

	const handleRegister = () => {
		authRegister(formData);
		if (isRegister) {
			history.push('/login');
		}
	}

	const handleLogin = () => {
		authLogin({
			login: formData.login,
			password: formData.password
		});
		console.log(isLogged);
		if (isLogged) {
			history.push('/account/dashboard');
		}
	}

	const validateFormData = (formData) => {
		const errors = { emailError: '', passwordError: '', loginError: '' };
		let isError = false;
		if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(formData.email)) {
			errors.emailError = 'Incorrect format for email';
			isError = true;
		}
		if (formData.password.length < 6) {
			errors.passwordError = 'Password should be longer';
			isError = true;
		}
		if (formData.login.length < 3) {
			errors.loginError = 'Login should be longer';
			isError = true;
		}
		setHelperText(errors);
		return isError;
	}

	return (
	<Box className={classes.root}>
    <Box className={classes.wrapper}>
				<div className={classes.logoWrapper}>
				<Logo />
			</div>
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
							// type='email'
							className={classes.field}
							error={!!helperText.emailError}
							helperText={helperText.emailError}
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
							error={action === 'Register' && !!helperText.loginError}
							helperText={action === 'Register' ? helperText.loginError : ''}
							defaultValue={formData.login}
							onChange={e => setFormData({...formData, login: e.target.value.trim()})}
						/>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              placeholder="******"
							name="password"
							type='password'
							className={classes.field}
							error={action === 'Register' && !!helperText.passwordError}
							helperText={action === 'Register' ? helperText.passwordError : ''}
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
		</Box>
  );
};

const mapStateToProps = state => {
	return {
		isLogged: state.authReducer.isLoggedIn,
		message: state.messageReducer.message,
		isRegister: state.authReducer.isRegister,
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
