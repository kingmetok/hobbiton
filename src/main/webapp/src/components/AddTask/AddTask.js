import React, { useEffect } from 'react';
import CreateTask from '../CreateTask/CreateTask';
import {
  Typography,
  Grid,
  Paper,
} from '@material-ui/core';
import createTask from '../../utils/createTask';
import createSeasonTask from '../../utils/createSeasonTask';
import useStyles from './AddTaskStyles';
import { connect } from 'react-redux';
import { getDefaultGoalsAction } from '../../redux/actions/goals';

let mock = [
  createTask('Quit smoking', `Don't smoke every day during 90 days.`),
  createTask('Start jogging', `Jogging every day smoke during 90 days.`),
  createTask('Drink water', `Drink water every day smoke during 90 days.`),
  createTask('Read book', `Read book every day smoke during 90 days.`),
];

let mockSeasons = [
  createSeasonTask('Summer task', 'Get prepared to the beach season', 'Summer'),
  createSeasonTask(
    'Winter task',
    'Run 10 km on a cold winter morning',
    'Winter'
  ),
  createSeasonTask(
    'Autumn task',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Autumn'
  ),
  createSeasonTask(
    'Spring task',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Spring'
  ),
];

function AddTask({ getDefaultGoals }) {
  const classes = useStyles();
  useEffect(() => {
    getDefaultGoals();
  },[]);

  const [seasonTasks, setSeasonTasks] = React.useState(mockSeasons);

  React.useEffect(() => {
    let month = new Date().getMonth() + 1;
    let result = seasonTasks;

    if (month === 12 || month === 1 || month === 2) {
      setSeasonTasks(result.filter((el) => el.season === 'Winter'));
    } else if (month === 3 || month === 4 || month === 5) {
      setSeasonTasks(result.filter((el) => el.season === 'Spring'));
    } else if (month === 6 || month === 7 || month === 8) {
      setSeasonTasks(result.filter((el) => el.season === 'Summer'));
    } else if (month === 9 || month === 10 || month === 11) {
      setSeasonTasks(result.filter((el) => el.season === 'Autumn'));
    }

    return;
  }, []);

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
                      {seasonTasks.map((el) => (
                        <Grid item xs={12} className={classes.item} key={el.title}>
                          <Paper
                            onClick={() =>
                              sendInputValues(el.title, el.description)
                            }
                            className={`${classes.paper} ${classes[el.season]}`}
                          >
                            <h4>{el.title}</h4>
                            <Typography className={classes.description}>
                              {el.description}
                            </Typography>
                            <p className={classes.term}>{el.season}</p>
                          </Paper>
                        </Grid>
                      ))}

                      {mock.map((el) => (
                        <Grid item xs={12} className={classes.item} key={el.title}>
                          <Paper
                            onClick={() =>
                              sendInputValues(el.title, el.description)
                            }
                            className={classes.paper}
                          >
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

const mapStateToProps = (state) => {
  return {
    defaultGoals: state.goalsReducer.defaultGoals,
    message: state.messageReducer.message,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDefaultGoals: () => {
      dispatch(getDefaultGoalsAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
