import React from 'react';
import CreateTask from '../CreateTask/CreateTask';
import { Box, Typography, List, ListItem } from '@material-ui/core';
import createSeasonTask from '../../utils/createSeasonTask';
import createTask from '../../utils/createTask';
import useStyles from './AddTaskStyles';

let mock = [
  createTask(
    'Quit smoking',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  ),
  createTask(
    'Start jogging',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  ),
  createTask(
    'Stay hydrated',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  ),
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

export default function AddTask() {
  const classes = useStyles();

  const [seasonTasks, setSeasonTasks] = React.useState(mockSeasons);

  React.useEffect(() => {
    let month = new Date().getMonth() + 1;
    let result = seasonTasks;

    console.log(month, result);

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
    <Box className={classes.wrapper}>
      <Box className={classes.listWrapper}>
        <Typography className={classes.header}>Choose a Goal...</Typography>
        <List className={classes.list}>
          {seasonTasks.map((el) => (
            <ListItem
              onClick={() => sendInputValues(el.title, el.description)}
              className={`${classes.listItem} ${classes.seasonTask} ${
                classes[el.season]
              }`}
              divider
            >
              <Typography className={classes.title}>{el.title}</Typography>
              <Typography className={classes.description}>
                {el.description}
              </Typography>
              <Typography
                className={classes.term}
              >{`Available  during ${el.season}`}</Typography>
            </ListItem>
          ))}
          {mock.map((el) => (
            <ListItem
              onClick={() => sendInputValues(el.title, el.description)}
              className={classes.listItem}
              divider
            >
              <Typography className={classes.title}>{el.title}</Typography>
              <Typography className={classes.description}>
                {el.description}
              </Typography>
              <Typography className={classes.term}>90 days</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <CreateTask values={inputValues} isDisabled={disabled} />
    </Box>
  );
}
