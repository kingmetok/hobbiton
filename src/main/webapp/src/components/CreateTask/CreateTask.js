import React,{ useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import getFormattedDate from '../../utils/formatDate';
import compareDates from '../../utils/compareDates';
import { addGoalAction } from '../../redux/actions/goals';
import { Button, Box, TextField, Typography, ButtonGroup } from '@material-ui/core';
import useStyles from './CreateTaskStyle';

const helperText = {
  position: 'absolute',
  bottom: '-33%',
};

const CreateTask = (props) => {
	const classes = useStyles();
	const { addGoal } = props;
	const history = useHistory();
	console.log(addGoal);

  const [inputValues, setInputValues] = useState({
    title: '',
    description: '',
    dateStarted: getFormattedDate(),
    term: 90,
  });

  const [validation, setValidation] = useState({
    title: false,
    description: false,
    dateStarted: false,
  });

  useEffect(() => {
    setInputValues({
      dateStarted: getFormattedDate(),
      term: 90,
      title: props.values.title,
      description: props.values.description,
    });

    return;
  }, [props.values]);

  function resetForm() {
    setInputValues({
      title: '',
      description: '',
      dateStarted: getFormattedDate(),
      term: 90,
    });
  }

  function handleInput(name, input) {
    setInputValues({ ...inputValues, [name]: input });
    setValid(name, input);
    setInvalid(name, input);
  }

	function submitValues() {
		let result = inputValues;
		console.log('hi');
    if (result.title && result.description) {
			if (compareDates(result.dateStarted)) {
				addGoal(result);
        console.log(result);
      } else {
        console.log('invalid date');
      }
    }
  }

  function setValid(name, value) {
    if (name === 'dateStarted' && compareDates(value)) {
      setValidation({ ...validation, [name]: false });
      return;
    } else if (value && name !== 'dateStarted') {
      setValidation({ ...validation, [name]: false });
      return;
    }
  }

  function setInvalid(name, value) {
    if (name === 'dateStarted' && !compareDates(value)) {
      setValidation({ ...validation, [name]: true });
      return;
    } else if (!value && name !== 'dateStarted') {
      setValidation({ ...validation, [name]: true });
      return;
    }
	}
	
	const handleCancel = () => {
		resetForm();
		return history.push('/account/dashboard');
	}

  return (
    <Box>
      <h3 className={classes.header}>
        ...or Create an Own Goal
      </h3>
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
          error={validation.dateStarted}
          helperText={
            validation.dateStarted ? 'Date must be bigger than today' : ''
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
          name="dateStarted"
          InputLabelProps={{
            shrink: true,
          }}
          onInput={(ev) => handleInput(ev.target.name, ev.target.value)}
        />
      </Box>

      <Typography>Term: 90 days</Typography>

      <ButtonGroup variant="outlined" color="primary">
				<Button
					onClick={() => resetForm()}
					>
					Reset
        </Button>
        <Button
          className={classes.button}
          onClick={() => submitValues()}
        >
					Submit
        </Button>
				<Button
					onClick={handleCancel}>
          Cancel
        </Button>
      </ButtonGroup>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
	return {
		addGoal: (data) => {
			dispatch(addGoalAction(data))
		}
	}
}

export default connect(null, mapDispatchToProps)(CreateTask);
