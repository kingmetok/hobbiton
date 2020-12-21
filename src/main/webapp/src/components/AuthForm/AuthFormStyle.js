import { makeStyles } from '@material-ui/core/styles';
const useStyles =  makeStyles((theme) => ({
  authCard: {
    width: 400,
    marginTop: 50,
    margin: 'auto',
		// background: theme.palette.primary,
		overflow: 'hidden'
  },
  root: {
    background: '#57bc90',
    width: '100%',
    height: '100vh',
	},
	wrapper: {
		paddingTop: '8%',
		display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
	logoWrapper: {
		maxWidth: '300px'
	}
}));

export default useStyles;