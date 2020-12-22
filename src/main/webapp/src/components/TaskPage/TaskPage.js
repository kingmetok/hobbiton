import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import createTask from '../../utils/createTask';
import useStyles from './TaskPageStyles';
import calcPercentage from '../../utils/calcPercentage';
import ProgressBar from '../ProgressBar/ProgressBar';
import InfoMessage from '../InfoMessage/InfoMessage';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import DoneIcon from '@material-ui/icons/Done';
import {
  editGoalByIdAction,
  getGoalByIdAction,
} from '../../redux/actions/goals';
import { Box, Button, Typography, Paper, Grid } from '@material-ui/core';

let goalDataMock = createTask(
  'quit smokin!',
  `Don't smoke every day during 90 days`
);

goalDataMock.progress = 60;

function TaskPage({ editGoalById, getGoalById, goalData, message, goalsList }) {
  const classes = useStyles();
  const { id } = useParams();

	useEffect(() => {
    getGoalById(id);
  },[]);

  function checkTask(id) {
    editGoalById(id);
    // отправляем запрос на обновление прогресса таски
    return;
  }

	return (
		<div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
					<Paper className={classes.paper}>
						<Box className={classes.taskPage}>
						<Typography className={classes.taskText}>
							{goalDataMock.title}
						</Typography>
						<Box className={classes.progressBarWrapper}>
							{goalDataMock.completed ?
							<DoneIcon
								color="primary"
								className={classes.icon}
							/> :
							<AutorenewIcon
								color="secondary"
								className={classes.icon}
							/>}
							<Box className={classes.progressBar}>
								<ProgressBar
									color="primary"
									variant="determinate"
									value={calcPercentage(goalDataMock.progress, goalDataMock.term)}
								/>
								</Box>
							<Button
								disabled={goalDataMock.completed}
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
					</Paper>
        </Grid>
        <Grid item xs={12}>
					<Paper className={classes.paper}>
						<Box className={classes.secondaryWrapper}>
							<Box className={classes.descriptionWrapper}>
								<Typography className={classes.descriptionText}>
									<span>Description: </span>{goalDataMock.description}
								</Typography>
								<Typography className={classes.descriptionText}>
								 {`Last checked at: ${goalDataMock.data_last_checked.getDate()}/${goalDataMock.data_last_checked.getMonth()}/${goalDataMock.data_last_checked.getFullYear()}`}
								</Typography>
								<Typography className={classes.descriptionText}>
								 <span>Started at: </span>{`${goalDataMock.dateStarted.getDate()}/${goalDataMock.dateStarted.getMonth()}/${goalDataMock.dateStarted.getFullYear()}`}
								</Typography>
								<Typography className={classes.descriptionText}>
								<span>Remaining time: </span>{`${
										goalDataMock.term - goalDataMock.progress
									} days`}
								</Typography>
							</Box>
							<Box className={classes.achievementsWrapper}></Box>
						</Box>
					</Paper>
        </Grid>
        {/* <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
      </Grid>
    </div>
    // <Box className={classes.taskPageWrapper}>
      // <Box className={classes.taskPage}>
      //   <Typography className={classes.taskText}>
      //     {goalDataMock.title}
      //   </Typography>
      //   <Box className={classes.progressBarWrapper}>
      //     <Box className={classes.progressBar}>
      //       <ProgressBar
      //         color="primary"
      //         variant="determinate"
      //         value={calcPercentage(goalDataMock.progress, goalDataMock.term)}
      //       />
      //     </Box>
      //     <Button
      //       disabled={goalDataMock.completed}
      //       onClick={(event) => {
      //         checkTask(event.target.id);
      //       }}
      //       color="primary"
      //       variant="contained"
      //     >
      //       Done
      //     </Button>
      //   </Box>
    //   </Box>
      // <Box className={classes.secondaryWrapper}>
      //   <Box className={classes.descriptionWrapper}>
      //     <Typography className={classes.descriptionText}>
      //       {goalDataMock.description}
      //     </Typography>
      //     <Typography className={classes.descriptionText}>
      //       {`Last checked at: ${goalDataMock.data_last_checked.getDate()}/${goalDataMock.data_last_checked.getMonth()}/${goalDataMock.data_last_checked.getFullYear()}`}
      //     </Typography>
      //     <Typography className={classes.descriptionText}>
      //       {`Started at: ${goalDataMock.dateStarted.getDate()}/${goalDataMock.dateStarted.getMonth()}/${goalDataMock.dateStarted.getFullYear()}`}
      //     </Typography>
      //     <Typography className={classes.descriptionText}>
      //       {`Remaining time: ${
      //         goalDataMock.term - goalDataMock.progress
      //       } days`}
      //     </Typography>
      //   </Box>
      //   <Box className={classes.achievementsWrapper}></Box>
      // </Box>
    //   {/* <InfoMessage info={message} /> */}
    // </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    goalsList: state.goalsReducer.goalsList,
    goalData: state.goalsReducer.goalByIdData,
    message: state.messageReducer.message,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    editGoalById: (id) => {
      dispatch(editGoalByIdAction(id));
    },
    getGoalById: (id) => {
      dispatch(getGoalByIdAction(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
