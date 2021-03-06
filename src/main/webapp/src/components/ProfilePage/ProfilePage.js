import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
  getUsersInfoAction,
  editUsersInfoAction,
  deleteUsersInfoAction,
  getUserByIdAction,
} from '../../redux/actions/user';
import { setMessageAction } from '../../redux/actions/message';
import { Button, Grid, ButtonGroup, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import ProfilePageStyle from './ProfilePageStyle';
import manIcon from '../../img/manIcon.svg';
import femaleIcon from '../../img/womanIcon.svg';
import otherIcon from '../../img/otherIcon.svg';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const ProfilePage = ({
  deleteUsersInfo,
  userData,
  setMessage,
  getUserById,
  isLogged,
  profileData,
}) => {
  const classes = ProfilePageStyle();
  const { id } = useParams();
  const history = useHistory();

  const isOwner = () => {
    return isLogged && (!id || id === userData.id);
  };

  useEffect(() => {
    if (!userData.id) {
      return;
    }
    if (!isOwner() && id) {
      getUserById(id);
    } else {
      getUserById(userData.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData, id]);

  const shareLink = (id) => {
    const { protocol, hash, host } = window.location;
    return `${protocol}//${hash}${host}/account/profile/${id}`;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink(profileData.id));
    setMessage('Copied link');
  };

  const handleDeleteUser = () => {
    deleteUsersInfo(profileData.id);
    localStorage.removeItem('jwt');
    history.push('/');
  };

  const userIcon = () => {
    return profileData.gender === 'female'
      ? femaleIcon
      : profileData.gender === 'male'
      ? manIcon
      : otherIcon;
  };

  if (!profileData) {
    return <div></div>;
  } else {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={`${classes.paper} ${classes.backgroundBlock}`}>
            <div className={classes.wall}></div>
            <div className={classes.userIcon}>
              <img src={userIcon()} alt="" />
            </div>
            <div className={classes.infoWrapper}>
              <h1>
                {profileData.login.charAt(0).toUpperCase() +
                  profileData.login.slice(1)}
              </h1>
              <h3>
                {isLogged && (!id || id === userData.id)
                  ? profileData.email
                  : null}
              </h3>
              {isLogged && (!id || id === userData.id) ? (
                <ButtonGroup
                  variant="outlined"
                  color="secondary"
                  aria-label="contained primary button group"
                >
                  {/* <Button
								className={classes.btn}>
								Edit
								<EditIcon/>
							</Button> */}
                  <Button onClick={handleDeleteUser} className={classes.btn}>
                    Delete account
                    <DeleteIcon />
                  </Button>
                  <Button className={classes.btn} onClick={handleCopyLink}>
                    Copy link to account
                    <ShareIcon />
                  </Button>
                </ButtonGroup>
              ) : !(isLogged && (!id || id === userData.id)) ? (
                <Button variant="contained" color="primary">
                  Subscribe
                  <BookmarkBorderIcon />
                </Button>
              ) : null}
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid item xs container direction="row" spacing={3}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <h4>My followers</h4>
                  <p className={classes.count}>{profileData.followers}</p>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <h4>My subscription</h4>
                  <p className={classes.count}>{profileData.subscription}</p>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <h4>My points</h4>
                  <p className={classes.count}>{profileData.points}</p>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* <InfoMessage info={message} /> */}
      </Grid>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    profileData: state.userReducer.profileData,
    message: state.messageReducer.message,
    isLogged: state.authReducer.isLoggedIn,
    userData: state.userReducer.userData,
  };
};
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
    setMessage: (message) => {
      dispatch(setMessageAction(message));
    },
    getUserById: (message) => {
      dispatch(getUserByIdAction(message));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
