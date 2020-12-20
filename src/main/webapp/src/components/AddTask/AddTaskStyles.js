import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => (
	console.log(theme),{
  listElementDisabled: {
		background: theme.palette.grey[100],
		color: theme.palette.text.disabled,
		pointerEvents: 'none',
  },
	paper: {
		padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
	},
	title: {
		textAlign: 'center'
	},
	goalsWrapper: {
		height: '100%'
	},
	term: {
		fontWeight: 700
	},
	item: {
		'& :hover': {
			background: theme.palette.primary.light,
      transition: '0.3s',
      cursor: 'pointer',
		}
	}
}));

export default useStyles;
