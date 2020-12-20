import React from 'react';
import CreateTask from '../CreateTask/CreateTask';
import { Box, Typography, List, ListItem } from '@material-ui/core';
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

export default function AddTask() {
  const classes = useStyles();

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
