import React, {useEffect} from 'react';
import CreateTask from '../CreateTask/CreateTask';
import { Box, Typography, List, ListItem, Grid, Paper } from '@material-ui/core';
import createTask from '../../utils/createTask';
import useStyles from './AddTaskStyles';
import { connect } from 'react-redux';
import {
	getDefaultGoalsAction
} from '../../redux/actions/goals';


let mock = [
  createTask('Quit smoking', `Don't smoke every day during 90 days.`),
  createTask('Start jogging', `Jogging every day smoke during 90 days.`),
  createTask('Drink water', `Drink water every day smoke during 90 days.`),
  createTask('Read book', `Read book every day smoke during 90 days.`),
];

function AddTask({getDefaultGoals}) {
	const classes = useStyles();
	useEffect(() => {
		getDefaultGoals();
	});

  const [inputValues, setInputValues] = React.useState({
    title: '',
    description: '',
  });

  const [disabled, setDisabled] = React.useState(false);

  function sendInputValues(title, description) {
    setInputValues({ title: title, description: description });
    setDisabled(true);
  }

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Paper className={classes.paper}>
					<Grid item xs container direction="row" spacing={3}>
						<Grid item xs={12} lg={8}>
							<Paper className={`${classes.paper} ${classes.goalsWrapper}`}>
								<h2 className={classes.title}>Choose a Goal...</h2>
									<Grid item xs={12}>
										<Paper className={classes.paper}>
											<Grid item xs container direction="column" spacing={2}>
												{mock.map((el) => (
													<Grid item xs={12} className={classes.item} key={el.title}>
														<Paper onClick={() => sendInputValues(el.title, el.description)}
															className={classes.paper}>
															<h4>{el.title}</h4>
															<Typography className={classes.description}>
																{el.description}
															</Typography>
															<p className={classes.term}>90 days</p>
														</Paper>
													</Grid>
												))}
											</Grid>
										</Paper>
								</Grid>
							</Paper>
						</Grid>
						<Grid item xs={12} lg={4}>
							<Paper className={classes.paper}>
								<CreateTask values={inputValues} isDisabled={disabled} />
							</Paper>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
    // <Box className={classes.wrapper}>
    //   <Box className={classes.listWrapper}>
    //     <Typography className={classes.header}>Choose a Goal...</Typography>
    //     <List className={classes.list}>
    //       {mock.map((el) => (
    //         <ListItem
    //           onClick={() => sendInputValues(el.title, el.description)}
    //           className={classes.listItem}
    //         >
    //           <Typography className={classes.title}>{el.title}</Typography>
    //           <Typography className={classes.description}>
    //             {el.description}
    //           </Typography>
    //           <Typography className={classes.term}>90 days</Typography>
    //         </ListItem>
    //       ))}
    //     </List>
    //   </Box>
    //   <CreateTask values={inputValues} isDisabled={disabled} />
    // </Box>
  );
}

const mapStateToProps = state => {
	return {
		defaultGoals: state.goalsReducer.defaultGoals,
		message: state.messageReducer.message
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getDefaultGoals: () => {
			dispatch(getDefaultGoalsAction())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
