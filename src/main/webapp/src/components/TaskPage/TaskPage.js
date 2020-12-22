import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDayToday } from '../../utils/getDateToday';
import useStyles from './TaskPageStyles';
import calcPercentage from '../../utils/calcPercentage';
import ProgressBar from '../ProgressBar/ProgressBar';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import DoneIcon from '@material-ui/icons/Done';
import Achievements from '../Achievements/Achievements';
import {
  editGoalByIdAction,
  getGoalByIdAction,
} from '../../redux/actions/goals';
import { Box, Button, Typography, Paper, Grid } from '@material-ui/core';

function TaskPage({ editGoalById, getGoalById, goalData }) {
  const classes = useStyles();
	const { id } = useParams();

	useEffect(() => {
    getGoalById(id);
  },[]);

  function checkTask() {
    editGoalById(goalData.id);
    return;
	}

	const badgeList = (array=[]) => {
			return array.filter(item=> item).map(item => {
				if (!item) return null;
				const imagePath = `../${item}`;
				return (
					<div className={classes.imageWrapper} key={imagePath}>
						<img src={imagePath} className={classes.badge} />
					</div>
				)
			})
	}

	return (
		<div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
					<Paper className={classes.paper}>
						<Box className={classes.taskPage}>
						<Typography className={classes.taskText}>
							{goalData.title}
						</Typography>
						<Box className={classes.progressBarWrapper}>
							{goalData.completed ?
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
									value={calcPercentage(goalData.progress, goalData.term)}
								/>
								</Box>
							<Button
									disabled={goalData.completed}
									className={classes.btnDone}
									onClick={(event) => checkTask(event.target.id)}
									color="primary"
									variant="contained"
									disabled={(getDayToday() === goalData.dateLastProof )|| goalData.completed}
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
									<span>Description: </span>{goalData.description}
								</Typography>
								<Typography className={classes.descriptionText}>
									<span>Last checked at: </span>{goalData.dateLastProof}
								</Typography>
								<Typography className={classes.descriptionText}>
								 <span>Started at: </span>{goalData.dateStarted}
								</Typography>
								<Typography className={classes.descriptionText}>
								<span>Remaining time: </span>{`${
										goalData.term - goalData.progress
									} days`}
								</Typography>
							</Box>
							<Box className={classes.achievementsWrapper}></Box>
						</Box>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<h4>Your badges:</h4>
						{!badgeList(goalData?.achievements).length ?
							<p>This goal doesn't have any badges yet! Don't give up!</p> :
						badgeList(goalData.achievements )
						}
					</Paper>
				</Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    goalData: state.goalsReducer.goalByIdData,
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
