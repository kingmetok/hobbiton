import React from 'react';
import { Button, Box, TextField, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import getFormattedDate from '../../utils/formatDate';
import compareDates from '../../utils/compareDates';
import { connect } from 'react-redux';
import { addGoalAction } from '../../redux/actions/goals';
import { useHistory } from 'react-router-dom';
import { helperText, useStyles } from './CreateTaskStyles';

const CreateTask = (props) => {
  const classes = useStyles();
  const { addGoal } = props;
  const history = useHistory();

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

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setInputValues({
      data_started: getFormattedDate(),
      term: 90,
      title: props.values.title,
      description: props.values.description,
    });

    return;
  }, [props.values]);

  useEffect(() => {
    setDisabled(props.isDisabled.disabled);
    setValidation({
      title: false,
      description: false,
      data_started: false,
    });
    return;
  }, [props.isDisabled]);

  function resetForm() {
    setInputValues({
      title: '',
      description: '',
      data_started: getFormattedDate(),
      term: 90,
    });
    setValidation({
      title: false,
      description: false,
      data_started: false,
    });
    setDisabled(false);
  }

  function handleInput(name, input) {
    setInputValues({ ...inputValues, [name]: input });
    setValid(name, input);
    setInvalid(name, input);
  }

  function submitValues() {
    let result = inputValues;
    if (result.title && result.description) {
      if (compareDates(result.data_started)) {
        let date = new Date(inputValues.data_started);
        result.data_started = date;
        addGoal(result);
        console.log(result);
        console.log('submitted');
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

  const handleCancel = () => {
    resetForm();
    return history.push('/account/dashboard');
  };

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.header}>
        ...or Create an Own Goal
      </Typography>
      <Box className={classes.inputWrapper}>
        <TextField
          disabled={disabled}
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
          disabled={disabled}
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
          value={inputValues.data_started}
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

      <Box className={classes.buttonWrapper}>
        <Button onClick={() => resetForm()} variant="outlined" color="primary">
          Reset
        </Button>
        <Button
          className={classes.button}
          onClick={() => submitValues()}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
        <Button onClick={handleCancel} variant="outlined" color="primary">
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addGoal: (data) => {
      dispatch(addGoalAction(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(CreateTask);
