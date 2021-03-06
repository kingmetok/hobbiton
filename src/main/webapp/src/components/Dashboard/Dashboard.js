import React, { useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Button,
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
} from '@material-ui/core';
import ProgressBar from '../ProgressBar/ProgressBar';
import calcPercentage from '../../utils/calcPercentage';
import {getDayToday} from '../../utils/getDateToday';
import useStyles from './DashboardStyles';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import DoneIcon from '@material-ui/icons/Done';
import {
  getUserGoalsAction,
  editGoalByIdAction,
} from '../../redux/actions/goals';

function Dashboard(props) {
  const classes = useStyles();
  const history = useHistory();
  const { getUserGoals, editGoalById, goalsList } = props;

  const [filterValue, setFilter] = React.useState('');

  useEffect(() => {
    getUserGoals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleInput(value) {
    setFilter(value);
  }

  function filterPipe(list) {
    list.sort((el, ev) =>
      el.completed === ev.completed ? 0 : el.completed ? 1 : -1
    );
    return list.filter((el) =>
      el.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  function getListItem(event, id) {
    if (
      event.target.nodeName !== 'BUTTON' &&
      event.target.nodeName !== 'SPAN'
    ) {
      history.push(`/account/goals/${id}`);
      return;
    }
    return;
  }

  function checkTask(id) {
    editGoalById(id);
    return;
  }

  function changeRoute(path) {
    props.history.push(path);
  }

  return (
    <div>
      <h2 className={classes.title}>Your goals</h2>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.dashboardHeader}>
            <TextField
              onInput={(ev) => handleInput(ev.target.value)}
              label="Search"
              size="small"
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                changeRoute('/account/addnew');
              }}
            >
              Add Task
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Paper>
              <Grid
                item
                xs
                container
                direction="column"
                spacing={2}
                className={classes.listWrapper}
              >
                {!goalsList.length <= 0 ? (
                  filterPipe(goalsList).map((el) => (
                    <Grid
                      item
                      xs={12}
                      key={el.id}
                      onClick={(event) => getListItem(event, el.id)}
                      className={classes.taskItem}
                    >
                      <Paper
                        className={
                          el.completed
                            ? `${classes.listElementDisabled} ${classes.listElement}`
                            : `${classes.listElement}`
                        }
                      >
                        {el.completed ? (
                          <DoneIcon color="primary" className={classes.icon} />
                        ) : (
                          <AutorenewIcon
                            color="secondary"
                            className={classes.icon}
                          />
                        )}
                        <Typography
                          className={
                            el.completed
                              ? `${classes.taskText} ${classes.completed}`
                              : classes.taskText
                          }
                        >
                          {el.title}
                        </Typography>
                        <Box className={classes.progressBar}>
                          <ProgressBar
                            color="primary"
                            variant="determinate"
                            value={calcPercentage(el.progress, el.term)}
                          />
                        </Box>
                        <Button
                          disabled={getDayToday() === el.dateLastProof || el.completed}
                          onClick={(event) => {
                            checkTask(el.id);
                          }}
                          color="primary"
                          variant="contained"
                        >
                          Done
                        </Button>
                      </Paper>
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <p>
                        You don't have any goals.Good time for doing something!
                      </p>
                    </Paper>
                  </Grid>
                )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.authReducer.isLoggedIn,
    message: state.messageReducer.message,
    goalsList: state.goalsReducer.goalsList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserGoals: () => {
      dispatch(getUserGoalsAction());
    },
    editGoalById: (id) => {
      dispatch(editGoalByIdAction(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));
