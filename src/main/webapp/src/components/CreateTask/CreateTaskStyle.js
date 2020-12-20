import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inputWrapper: {
    display: 'flex',
    flexFlow: 'wrap column',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    marginBottom: '20px',
  },
	header: {
		marginBottom: 10,
		fontSize: '21px'
	},
});

export default useStyles;