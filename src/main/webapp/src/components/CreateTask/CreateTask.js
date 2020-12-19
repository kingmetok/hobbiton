import React from 'react';
import { Button, Box, TextField, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
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

  description: {},

  button: {
    alignSelf: 'flex-end',
  },

  header: {
    fontSize: '30px',
  },
});

const helperText = {
  position: 'absolute',
  bottom: '-33%',
};

export default function CreateTaskStyles(props) {
  const classes = useStyles();

  const [inputValues, setInputValues] = useState({
    title: '',
    description: '',
    data_started: getFormattedDate(),
    term: 90,
  });

  const [validation, setValidation] = useState({
    title: false,
    description: false,
    data_started: false,
  });

  useEffect(() => {
    setInputValues({
      ...inputValues,
      title: props.values.title,
      description: props.values.description,
    });

    return;
  }, [props.values.title]);

  function handleInput(name, input) {
    setInputValues({ ...inputValues, [name]: input });
    setValid(name, input);
    setInvalid(name, input);
  }

  function submitValues() {
    let result = inputValues;
    if (result.title && result.description) {
      if (compareDates(result.data_started)) {
        console.log(result);
      } else {
        console.log('invalid date');
      }
    }
  }

  function setValid(name, value) {
    if (name === 'data_started' && compareDates(value)) {
      setValidation({ ...validation, [name]: false });
      return;
    } else if (value && name !== 'data_started') {
      setValidation({ ...validation, [name]: false });
      return;
    }
  }

  function setInvalid(name, value) {
    if (name === 'data_started' && !compareDates(value)) {
      setValidation({ ...validation, [name]: true });
      return;
    } else if (!value && name !== 'data_started') {
      setValidation({ ...validation, [name]: true });
      return;
    }
  }

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.header}>
        ...or Create an Own Goal
      </Typography>
      <Box className={classes.inputWrapper}>
        <TextField
          FormHelperTextProps={{ style: helperText }}
          error={validation.title}
          helperText={validation.title ? 'Title is required' : ''}
          onFocus={(ev) => {
            setValid(ev.target.name, ev.target.value);
          }}
          onBlur={(ev) => {
            setInvalid(ev.target.name, ev.target.value);
          }}
          className={classes.input}
          id="title"
          label="Title"
          variant="outlined"
          name="title"
          value={inputValues.title}
          onInput={(ev) => handleInput(ev.target.name, ev.target.value)}
        />
        <TextField
          FormHelperTextProps={{ style: { ...helperText, bottom: '-8%' } }}
          multiline
          rows="10"
          error={validation.description}
          helperText={validation.description ? 'Description is required' : ''}
          onFocus={(ev) => {
            setValid(ev.target.name, ev.target.value);
          }}
          onBlur={(ev) => {
            setInvalid(ev.target.name, ev.target.value);
          }}
          className={`${classes.input} ${classes.description}`}
          id="description"
          label="Description"
          variant="outlined"
          name="description"
          value={inputValues.description}
          onInput={(ev) => handleInput(ev.target.name, ev.target.value)}
        />
        <TextField
          FormHelperTextProps={{ style: helperText }}
          error={validation.data_started}
          helperText={
            validation.data_started ? 'Date must be bigger than today' : ''
          }
          onFocus={(ev) => {
            setValid(ev.target.name, ev.target.value);
          }}
          onBlur={(ev) => {
            setInvalid(ev.target.name, ev.target.value);
          }}
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
      <Typography>Term: 90 days</Typography>
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
