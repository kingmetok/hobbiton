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
		background: 'radial-gradient(circle, rgba(1,82,73,1) 0%, rgba(119,201,212,0.938813025210084) 77%, rgba(119,201,212,1) 100%);',
		borderRadius: '10px'
	},
	userIcon: {
		width: '100px',
		height: '100px',
		borderRadius: '50%',
		background: theme.palette.secondary.main,
		marginLeft: '2em',
		marginTop: '-3em',
		bottom: '4em',
		left: '2em',
		'& img': {
			width: '100%',
			height: 'auto',
			borderRadius: '50%',
		},
		share: {
			cursor: 'pointer'
		}
	},
}));

export default ProfilePageStyle;