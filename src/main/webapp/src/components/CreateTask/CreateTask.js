import React from 'react';
import { Button, Box, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import getFormattedDate from '../../utils/formatDate';
import compareDates from '../../utils/compareDates';

const useStyles = makeStyles({
  wrapper: {
    width: '40%',
    background: 'white',
    display: 'flex',
    flexFlow: 'column',
    minHeight: '10vh',
    alignItems: 'center',
  },

  inputWrapper: {
    display: 'flex',
    flexFlow: 'wrap column',
    justifyContent: 'space-between',
    width: '100%',
  },

  input: {
    marginBottom: '20px',
  },

  button: {
    alignSelf: 'flex-end',
  },

  header: {
    fontSize: '30px',
  },
});

export default function CreateTaskStyles(props) {
  const classes = useStyles();

  const { title, description, term } = props.values;

  const [inputValues, setInputValues] = useState({
    title: title || '',
    description: description || '',
    term: term || 0,
    data_started: getFormattedDate(),
  });

  function handleInput(name, input) {
    setInputValues({ ...inputValues, [name]: input });
  }

  function submitValues() {
    let result = inputValues;
    if (result.title && result.term > 0) {
      if (compareDates(result.data_started)) {
        console.log(result);
        return result;
      } else {
        console.log('invalid date');
      }
    }
  }

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.header}>
        ...or Create an Own Goal
      </Typography>

      <Box className={classes.inputWrapper}>
        <TextField
          className={classes.input}
          id="title"
          label="Title"
          variant="outlined"
          name="title"
          value={title}
          onInput={(ev) => handleInput(ev.target.name, ev.target.value)}
        />
        <TextField
          className={classes.input}
          id="description"
          label="Description"
          variant="outlined"
          name="description"
          value={description}
          onInput={(ev) => handleInput(ev.target.name, ev.target.value)}
        />
        <TextField
          className={classes.input}
          id="term"
          label="Term (in days)"
          variant="outlined"
          name="term"
          value={term}
          type="number"
          onInput={(ev) => handleInput(ev.target.name, ev.target.value)}
        />
        <TextField
          className={classes.input}
          id="term"
          label="Starting date"
          defaultValue={getFormattedDate()}
          type="date"
          variant="outlined"
          name="data_started"
          InputLabelProps={{
            shrink: true,
          }}
          onInput={(ev) => handleInput(ev.target.name, ev.target.value)}
        />
      </Box>
      <Button
        className={classes.button}
        onClick={() => submitValues()}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </Box>
  );
}
