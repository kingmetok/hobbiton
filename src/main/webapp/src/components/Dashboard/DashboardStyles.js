import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => (
	console.log(theme),{
  listElement: {
    background: theme.palette.grey[100],
		borderRadius: '2px',
		width: '100%',
		padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
		transition: '0.3s',
		alignItems: 'center',
    '&:hover:not(listElementDisabled) ': {
      background: 'lightblue',
      transition: '0.3s',
      cursor: 'pointer',
    },
	},
  listElementDisabled: {
		background: theme.palette.grey[100],
		color: theme.palette.text.disabled,
		pointerEvents: 'none',
  },
  addButton: {
		background: theme.palette.primary.dark,
		color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
	taskText: {
		width: '20%',
		textAlign: 'left',
		borderRight: 'solid 1px black',
		fontFamily: theme.typography.fontFamily,
		fontSize: '20px',
  },
  progressBar: {
    width: '70%',
  },
  searchWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
	link: {
		width: '100%',
		textDecoration: 'none',
		color: theme.palette.grey[800]
	},
	paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
	},
	listWrapper: {
		margin: 0
	},
	dashboardHeader: {
		padding: theme.spacing(2),
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
		},
		title: {
			textAlign: 'center'
		}
}));

export default useStyles;
