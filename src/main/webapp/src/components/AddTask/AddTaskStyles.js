import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	listElementDisabled: {
		background: theme.palette.grey[100],
		color: theme.palette.text.disabled,
		pointerEvents: 'none',
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	title: {
		textAlign: 'center',
	},
	goalsWrapper: {
		height: '100%',
	},
	term: {
		fontWeight: 700,
	},
	item: {
		'& :hover': {
			background: theme.palette.primary.light,
			transition: '0.3s',
			cursor: 'pointer',
		},
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
    }
  )
);

export default useStyles;
