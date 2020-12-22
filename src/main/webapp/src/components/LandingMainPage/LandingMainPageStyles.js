import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  landingContentWrapper: {
    margin: '0 auto',
    width: '80%',
  },
  root: {
    width: '100%',
    overflow: 'hidden',
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
    alignItems: 'center',
  },
  logoWrapper: {
    maxWidth: '200px',
  },
  btnLogin: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    marginLeft: 'auto',
  },
  accent: {
    color: theme.palette.secondary.main,
  },
  copyright: {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    margin: 'auto',
  },
  signUpText: {
    marginBottom: '15px',
  },
}));

export default useStyles;
