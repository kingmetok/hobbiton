import React, {
	useState,
	useEffect
} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	getUsersInfoAction,
	editUsersInfoAction,
	deleteUsersInfoAction
} from '../../redux/actions/user';
import InfoMessage from '../InfoMessage/InfoMessage';
import { setMessageAction, clearMessageAction } from '../../redux/actions/message';

import Paper from '@material-ui/core/Paper';
import { Button, Grid, ButtonGroup, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import ShareIcon from '@material-ui/icons/Share';
import PersonIcon from '@material-ui/icons/Person';
import ProfilePageStyle from './ProfilePageStyle';
import manIcon from '../../img/manIcon.svg';
import femaleIcon from '../../img/womanIcon.svg';

const ProfilePage = ({getUsersInfo, editUsersInfo, deleteUsersInfo, userData, message, setMessage}) => {
	const classes = ProfilePageStyle();
	const [user, setUser] = useState({
		gender: 'female',
		login: 'Vita',
		email: 'v@mail.com',
		subscription: 0,
		followers: 0,
		points: 0,
		id: 1234
	});
	const userIcon = user.gender === 'female' ? femaleIcon : manIcon;
	const history = useHistory();
	console.log(history);

	useEffect(() => {
		try {
			
			getUsersInfo();
		} catch (e) {
		}
	}, []);

	const shareLink = () => {
		const { protocol, hash, host } = window.location;
		return `${protocol}//${hash}${host}/users/?id=${user.id}`;
	}

	const handleCopyLink = () => {
		navigator.clipboard.writeText(shareLink());
		setMessage('Copied link');
	}

	const handleDeleteUser = () => {
		deleteUsersInfo(user.id);
		localStorage.removeItem('jwt');
		history.push('/');
	}

	return (
			<Grid container spacing={0}>
				<Grid item xs={12}>
				<Paper className={`${classes.paper} ${classes.backgroundBlock}`}>
						<div className={classes.wall}></div>
						<div className={classes.userIcon}>
							<img src={userIcon} />
						</div>
					<div className={classes.infoWrapper}>
						<h1>{user.login}</h1>
						<h3>{user.email}</h3>
						<ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
							<Button
								className={classes.btn}>
							Edit
							<EditIcon/>
						</Button>
							<Button
								onClick={handleDeleteUser}
								className={classes.btn}>
								Delete
							<DeleteIcon/>
							</Button>
							<Button 
								className={classes.btn}
								onClick={handleCopyLink}>
								Copy link
								<ShareIcon/> 
							</Button>
						</ButtonGroup>
					</div>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Grid item xs container direction="row" spacing={1}>
							<Grid item xs={4}>
							<Paper className={classes.paper}>
								<h4>My followers</h4>
								<p className={classes.count}>{user.followers }</p>
								</Paper>
							</Grid>
							<Grid item xs={4}>
							<Paper className={classes.paper}>
								<h4>My subscription</h4>
								<p className={classes.count}>{user.subscription }</p>
								</Paper>
							</Grid>
							<Grid item xs={4}>
							<Paper className={classes.paper}>
							<h4>My points</h4>
								<p className={classes.count}>{user.points }</p>
								</Paper>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<InfoMessage info={message} />
			</Grid>
	)
}

const mapStateToProps = state => {
	return {
		userData: state.userReducer.userData,
		message: state.messageReducer.message
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getUsersInfo: () => {
			dispatch(getUsersInfoAction());
		},
		editUsersInfo: (userData) => {
			dispatch(editUsersInfoAction(userData));
		},
		deleteUsersInfo: () => {
			dispatch(deleteUsersInfoAction());
		},
		setMessage: message => {
			dispatch(setMessageAction(message));
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
