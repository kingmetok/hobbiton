import React, { useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { connect } from 'react-redux';
import createTask from '../../utils/createTask';
import useStyles from './TaskPageStyles';
import calcPercentage from '../../utils/calcPercentage';
import ProgressBar from '../ProgressBar/ProgressBar';
import InfoMessage from '../InfoMessage/InfoMessage';
import {
	editGoalByIdAction,
	getGoalByIdAction
} from '../../redux/actions/goals';
import { Box, Button, Typography } from '@material-ui/core'


let goalDataMock = createTask(
  'quit smokin!',
  'sassssssssd asddddddddd asdddddddddd asddddd sassssssssd asddddddddd asdddddddddd asddddd sassssssssd asddddddddd asdddddddddd asddddd sassssssssd asddddddddd asdddddddddd asddddd sassssssssd asddddddddd asdddddddddd asddddd'
);

goalDataMock.progress = 60;

function TaskPage({editGoalById, getGoalById, goalData, message}) {
	const classes = useStyles();
	const { id } = useParams();
	
	useEffect(() => {
		getGoalById(id);
		}
	);

  function checkTask(id) {
		console.log(id);
		editGoalById(id);
    // отправляем запрос на обновление прогресса таски
    return;
  }

  return (
    <Box className={classes.taskPageWrapper}>
      <Box className={classes.taskPage}>
        <Typography className={classes.taskText}>{goalDataMock.title}</Typography>
        <Box className={classes.progressBarWrapper}>
          <Box className={classes.progressBar}>
            <ProgressBar
              color="primary"
              variant="determinate"
              value={calcPercentage(goalDataMock.progress, goalDataMock.term)}
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
            {goalDataMock.description}
          </Typography>
          <Typography className={classes.descriptionText}>
            {`Last checked at: ${goalDataMock.data_last_checked.getDate()}/${goalDataMock.data_last_checked.getMonth()}/${goalDataMock.data_last_checked.getFullYear()}`}
          </Typography>
          <Typography className={classes.descriptionText}>
            {`Started at: ${goalDataMock.dateStarted.getDate()}/${goalDataMock.dateStarted.getMonth()}/${goalDataMock.dateStarted.getFullYear()}`}
          </Typography>
          <Typography className={classes.descriptionText}>
            {`Remaining time: ${goalDataMock.term - goalDataMock.progress} days`}
          </Typography>
        </Box>
        <Box className={classes.achievementsWrapper}></Box>
			</Box>
			<InfoMessage info={message} />
    </Box>
  );
}

const mapStateToProps = state => {
	return {
		goalsList: state.goalsReducer.goalsList,
		goalData: state.goalsReducer.goalByIdData,
		message: state.messageReducer.message
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		editGoalById: (id) => {
			dispatch(editGoalByIdAction(id))
		},
		getGoalById: (id) => {
			dispatch(getGoalByIdAction(id))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);;
