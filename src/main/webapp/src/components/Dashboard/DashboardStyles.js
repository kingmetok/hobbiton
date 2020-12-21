import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dashboardWrapper: {
    width: '90%',
    margin: '0 auto',
  },
  taskList: {
    width: '100%',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
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
		color: theme.palette.grey[400],
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
    color: theme.palette.grey[800],
  },
  seasonTask: {
    border: '1px solid',
    borderRadius: '2px',
    boxSizing: 'border-box',
  },
  Winter: {
    borderColor: 'blue',
    background: 'rgb(95,112,204)',
    background:
      'radial-gradient(circle, rgba(95,112,204,1) 0%, rgba(0,212,255,1) 100%)',
  },
  Spring: {
    borderColor: 'green',
    background: 'rgb(50,249,85))',
    background:
      'radial-gradient(circle, rgba(50,249,85,1) 0%, rgba(73,128,76,1) 100%)',
  },
  Summer: {
    borderColor: 'red',
    background: 'rgb(251,36,36)',
    background:
      'radial-gradient(circle, rgba(251,36,36,1) 0%, rgba(145,30,30,1) 100%)',
  },
  Autumn: {
    borderColor: 'orange',
    background: 'rgb(251,173,36)',
    background:
      'radial-gradient(circle, rgba(251,173,36,1) 0%, rgba(176,109,22,1) 100%)',
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
	},
	icon: {
		marginRight: '1em'
	}
}));

export default useStyles;
