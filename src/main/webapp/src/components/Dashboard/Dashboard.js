import React from 'react';
import {
  Button,
  Box,
  List,
  ListItem,
  Divider,
  Typography,
  TextField,
} from '@material-ui/core';
import createTask from '../../utils/createTask';
import ProgressBar from '../ProgressBar/ProgressBar';
import calcPercentage from '../../utils/calcPercentage';
import useStyles from './DashboardStyles';
import { withRouter } from 'react-router-dom';

let mock = [
  createTask('quit smokin!', 'sassssssssd asddddddddd asdddddddddd asddddd'),
  createTask('start jogin!', 'sassssssssd asddddddddd asdddddddddd asddddd'),
  createTask('water drink!', 'sassssssssd asddddddddd asdddddddddd asddddd'),
  createTask('sadasdasdasd!', 'sassssssssd asddddddddd asdddddddddd asddddd'),
];

mock[0].progress = 89;
mock[1].progress = 70;
mock[2].progress = 5;
mock[3].progress = 90;

mock[0].id = 1;
mock[1].id = 2;
mock[2].id = 3;
mock[3].id = 4;

mock[3].completed = true;

function Dashboard(props) {
  const classes = useStyles();

  const [filterValue, setFilter] = React.useState('');

  function handleInput(value) {
    setFilter(value);
  }

  function filterPipe(list) {
    list.sort((el, ev) =>
      el.completed === ev.completed ? 0 : el.completed ? 1 : -1
    );

    return list.filter((el) => el.title.includes(filterValue));
  }

  function getListItem(event, id, isCompleted) {
    if (
      event.target.nodeName !== 'BUTTON' &&
      event.target.nodeName !== 'SPAN'
    ) {
      if (!isCompleted) {
        changeRoute(`/account/goals/${id}`);
        return;
      }
      return;
    }
    return;
  }

  function checkTask(id) {
    console.log(id);
    // отправляем запрос на обновление прогресса таски
    return;
  }

  function changeRoute(path) {
    props.history.push(path);
  }

  return (
    <Box className={classes.dashboardWrapper}>
      <Box className={classes.taskListWrapper}>
        <Box className={classes.searchWrapper}>
          <TextField
            onInput={(ev) => handleInput(ev.target.value)}
            label="Search"
            size="small"
          />

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
        </Box>

        <List className={classes.taskList}>
          {filterPipe(mock).map((el) => (
            <>
              <ListItem
                onClick={(event) => getListItem(event, el.id, el.completed)}
                divider
                className={
                  el.completed
                    ? classes.listElementDisabled
                    : classes.listElement
                }
              >
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
                  disabled={el.completed}
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
