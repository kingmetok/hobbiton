import { makeStyles } from '@material-ui/core/styles';

const ProfilePageStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
		textAlign: 'center',
		userSelect: 'none',
    color: theme.palette.text.secondary,
	},
	wall: {
		height: '200px',
		width: '100%',
		background: 'radial-gradient(circle, rgba(1,82,73,1) 0%, rgba(119,201,212,0.938813025210084) 77%, rgba(119,201,212,1) 100%);',
		borderRadius: '10px'
	},
	userIcon: {
		width: '100px',
		height: '100px',
		borderRadius: '50%',
		background: theme.palette.secondary.main,
		margin: '-3em 2em 0 2em',
		'& img': {
			width: '100%',
			height: 'auto',
			borderRadius: '50%',
		},
	},
	btn: {
		'& span': {
			color: theme.palette.text.main
		}
	},
	infoWrapper: {
		display: 'flex',
		flexGrow: 1,
		marginTop: '1em',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap'
	}, 
	backgroundBlock: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	count: {
		fontSize: '2em',
		fontWeight: 700
	}
}));

export default ProfilePageStyle;