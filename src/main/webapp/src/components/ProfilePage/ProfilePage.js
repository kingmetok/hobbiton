import React, {
	useState,
	useEffect
} from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
	getUsersInfoAction,
	editUsersInfoAction,
	deleteUsersInfoAction,
	getUserByIdAction
} from '../../redux/actions/user';
import { setMessageAction, clearMessageAction } from '../../redux/actions/message';
import InfoMessage from '../InfoMessage/InfoMessage';
import { Button, Grid, ButtonGroup, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import ProfilePageStyle from './ProfilePageStyle';
import manIcon from '../../img/manIcon.svg';
import femaleIcon from '../../img/womanIcon.svg';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const ProfilePage = ({
	getUsersInfo,
	editUsersInfo,
	deleteUsersInfo,
	userData,
	message,
	setMessage,
	getUserById,
	isLogged
}) => {
	const classes = ProfilePageStyle();
	const {id} = useParams();
	const history = useHistory();
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
	useEffect(() => {
		if (id) {
			getUserById(id);
		} else {
			getUsersInfo();
		}
	});

	const shareLink = () => {
		const { protocol, hash, host } = window.location;
		return `${protocol}//${hash}${host}/account/profile/${id}`;
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
			<Grid container spacing={3}>
				<Grid item xs={12}>
				<Paper className={`${classes.paper} ${classes.backgroundBlock}`}>
						<div className={classes.wall}></div>
						<div className={classes.userIcon}>
							<img src={userIcon} />
						</div>
					<div className={classes.infoWrapper}>
						<h1>{user.login}</h1>
						<h3>{user.email}</h3>
						{!id ?
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
							</ButtonGroup> : (isLogged && id ) ?
								<Button variant="contained" color="primary">
									Subscribe
									<BookmarkBorderIcon/>
								</Button> : null
						}
					</div>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Grid item xs container direction="row" spacing={3}>
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
		message: state.messageReducer.message,
		isLogged: state.authReducer.isLoggedIn
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
		},
		getUserById: message => {
			dispatch(getUserByIdAction(message));
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
