import React from 'react';
import {
  Box,
  Button,
  List,
  ListItem,
  Divider,
  Typography,
  TextField,
} from '@material-ui/core';
import createTask from '../../utils/createTask';
import useStyles from './TaskPageStyles';
import calcPercentage from '../../utils/calcPercentage';
import ProgressBar from '../ProgressBar/ProgressBar';

let mock = createTask(
  'quit smokin!',
  'sassssssssd asddddddddd asdddddddddd asddddd sassssssssd asddddddddd asdddddddddd asddddd sassssssssd asddddddddd asdddddddddd asddddd sassssssssd asddddddddd asdddddddddd asddddd sassssssssd asddddddddd asdddddddddd asddddd'
);

mock.progress = 60;

export default function TaskPage() {
  const classes = useStyles();

  function checkTask(id) {
    console.log(id);
    // отправляем запрос на обновление прогресса таски
    return;
  }

  //   function changeRoute(path) {
  //     props.history.push(path);
  //   }

  return (
    <Box className={classes.taskPageWrapper}>
      <Box className={classes.taskPage}>
        <Typography className={classes.taskText}>{mock.title}</Typography>
        <Box className={classes.progressBarWrapper}>
          <Box className={classes.progressBar}>
            <ProgressBar
              color="primary"
              variant="determinate"
              value={calcPercentage(mock.progress, mock.term)}
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
        </Box>
      </Box>
      <Box className={classes.secondaryWrapper}>
        <Box className={classes.descriptionWrapper}>
          <Typography className={classes.descriptionText}>
            {mock.description}
          </Typography>
          <Typography className={classes.descriptionText}>
            {`Last checked at: ${mock.data_last_checked.getDate()}/${mock.data_last_checked.getMonth()}/${mock.data_last_checked.getFullYear()}`}
          </Typography>
          <Typography className={classes.descriptionText}>
            {`Started at: ${mock.data_started.getDate()}/${mock.data_started.getMonth()}/${mock.data_started.getFullYear()}`}
          </Typography>
          <Typography className={classes.descriptionText}>
            {`Remaining time: ${mock.term - mock.progress} days`}
          </Typography>
        </Box>
        <Box className={classes.achievementsWrapper}></Box>
      </Box>
    </Box>
  );
}
