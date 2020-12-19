import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
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

const useStyles = makeStyles(theme => (
	{
  authCard: {
    width: 400,
    marginTop: 100,
    margin: 'auto',
		background: theme.palette.primary,
		overflow: 'hidden'
  },
  root: {
    background: '#57bc90',
    width: '100%',
    height: '100vh',
	},
	wrapper: {
		paddingTop: '8%'
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
		backgroundColor: theme.palette.primary.dark,
		color: '#ffffff'
  },
  link: {
    marginBottom: '20px',
    display: 'block',
    width: '100%',
		textAlign: 'center',
		color: theme.palette.text.dark
  },
  radio: {
    padding: '20px 0',
  },
}));

const AuthForm = ({ link, linkMessage, btnText, action, authRegister, authLogin, isLogged}) => {
	const classes = useStyles();
	// const [isLogin] = useState(isLogged);
	const [formData, setFormData] = useState({
		email: '',
		login: '',
		password: '',
		gender: 'female'
	});
	const history = useHistory();

	useEffect(() => {
		if (isLogged) {
		history.push('/account/dashboard');
		} else {
			history.push('/login');
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		action === 'Register' ? handleRegister() : handleLogin();
	}

	const handleRegister = () => {
		authRegister(formData);
		history.push('/login');
	}

	const handleLogin = () => {
		authLogin({
			login: formData.login,
			password: formData.password
		});
		history.push('/account/dashboard');
	}

	return (
	<Box className={classes.root}>
    <Box className={classes.wrapper}>
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
		</Box>
  );
};

const mapStateToProps = state => {
	return {
		isLogged: state.authReducer.isLoggedIn,
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
