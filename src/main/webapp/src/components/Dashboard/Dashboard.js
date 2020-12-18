import React from 'react';
import {
  Button,
  Box,
  List,
  ListItem,
  Divider,
  Typography,
} from '@material-ui/core';
import createTask from '../../utils/createTask';
import ProgressBar from '../ProgressBar/ProgressBar';
import calcPercentage from '../../utils/calcPercentage';
import useStyles from './DashboardStyles';
import { withRouter } from 'react-router-dom';

let mock = [
  createTask(
    'quit smokin!',
    'sassssssssd asddddddddd asdddddddddd asddddd',
    30
  ),
  createTask(
    'start jogin!',
    'sassssssssd asddddddddd asdddddddddd asddddd',
    10
  ),
  createTask(
    'water drink!',
    'sassssssssd asddddddddd asdddddddddd asddddd',
    23
  ),
];

function getListItem(event) {
  if (event.target.nodeName !== 'BUTTON' && event.target.nodeName !== 'SPAN') {
    // переходим на страницу таски по айди
    return;
  }
  return;
}

function checkTask(id) {
  console.log(id);
  // отправляем запрос на обновление прогресса таски
  return;
}

function Dashboard(props) {
  const classes = useStyles();

  function changeRoute(path) {
    props.history.push(path);
  }

  return (
    <Box className={classes.dashboardWrapper}>
      <Box className={classes.taskListWrapper}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.addButton}
          onClick={() => {
            changeRoute('/account/addnew');
          }}
        >
          Add Task
        </Button>
        <List className={classes.taskList}>
          {mock.map((el) => (
            <>
              <ListItem
                onClick={(event) => getListItem(event)}
                divider
                className={classes.listElement}
              >
                <Typography className={classes.taskText}>{el.title}</Typography>
                <Box className={classes.progressBar}>
                  <ProgressBar
                    color="primary"
                    variant="determinate"
                    value={calcPercentage(el.progress, el.term)}
                  />
                </Box>
                <Button
                  onClick={(event) => {
                    checkTask(event.target.id);
                  }}
                  color="primary"
                  variant="contained"
                >
                  Done
                </Button>
              </ListItem>
              <Divider className={classes.divider} />
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default withRouter(Dashboard);
