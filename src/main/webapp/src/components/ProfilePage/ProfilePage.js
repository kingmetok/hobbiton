import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams} from 'react-router-dom';
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
import otherIcon from '../../img/otherIcon.svg';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const ProfilePage = ({
	editUsersInfo,
	deleteUsersInfo,
	userData,
	message,
	setMessage,
	getUserById,
	isLogged,
	profileData
}) => {
	const classes = ProfilePageStyle();
	const {id} = useParams();
	const history = useHistory();

	const isOwner = () => {
		return isLogged && (!id || id == userData.id)
	} 

	useEffect(() => {
		if (!userData) { return }
		if (!isOwner()) {
			getUserById(id);
		} else {
			getUserById(userData.id)
		}
	}, [userData, id]);

	const shareLink = (id) => {
		const { protocol, hash, host } = window.location;
		return `${protocol}//${hash}${host}/account/profile/${id}`;
	}

	const handleCopyLink = () => {
		navigator.clipboard.writeText(shareLink(profileData.id));
		setMessage('Copied link');
	}

	const handleDeleteUser = () => {
		deleteUsersInfo(profileData.id);
		localStorage.removeItem('jwt');
		history.push('/');
	}

	const userIcon = () => {
		return profileData.gender === 'female' ? femaleIcon : profileData.gender === 'male' ? manIcon : otherIcon
	}

	if (!profileData) {
		return (
			<div>

			</div>
		)

	} else {
		return (
			<Grid container spacing={3}>
				<Grid item xs={12}>
				<Paper className={`${classes.paper} ${classes.backgroundBlock}`}>
						<div className={classes.wall}></div>
						<div className={classes.userIcon}>
							<img src={userIcon()} />
						</div>
					<div className={classes.infoWrapper}>
						<h1>{profileData.login.charAt(0).toUpperCase() + profileData.login.slice(1)}</h1>
						<h3>{profileData.email}</h3>
						{isLogged && (!id || id == userData.id)?
						<ButtonGroup variant="outlined" color="secondary" aria-label="contained primary button group">
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
							</ButtonGroup> : !(isLogged && (!id || id == userData.id)) ?
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
								<p className={classes.count}>{userData.followers }</p>
								</Paper>
							</Grid>
							<Grid item xs={4}>
							<Paper className={classes.paper}>
								<h4>My subscription</h4>
								<p className={classes.count}>{userData.subscription }</p>
								</Paper>
							</Grid>
							<Grid item xs={4}>
							<Paper className={classes.paper}>
							<h4>My points</h4>
								<p className={classes.count}>{userData.points }</p>
								</Paper>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				{/* <InfoMessage info={message} /> */}
			</Grid>
	)
	}

	
}

const mapStateToProps = state => {
	return {
		profileData: state.userReducer.profileData,
		message: state.messageReducer.message,
		isLogged: state.authReducer.isLoggedIn,
		userData: state.userReducer.userData,
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
