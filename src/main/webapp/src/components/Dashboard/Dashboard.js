import React, { useEffect } from 'react';
import { useHistory, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Button,
  Box,
  List,
  ListItem,
  Divider,
  Typography,
  TextField,
} from '@material-ui/core';
import createTask from '../../utils/createTask';
import ProgressBar from '../ProgressBar/ProgressBar';
import calcPercentage from '../../utils/calcPercentage';
import useStyles from './DashboardStyles';

import {
	getUserGoalsAction,
	editGoalByIdAction,
} from '../../redux/actions/goals';

let mock = [
  createTask('quit smokin!', 'sassssssssd asddddddddd asdddddddddd asddddd'),
  createTask('start jogin!', 'sassssssssd asddddddddd asdddddddddd asddddd'),
  createTask('water drink!', 'sassssssssd asddddddddd asdddddddddd asddddd'),
  createTask('sadasdasdasd!', 'sassssssssd asddddddddd asdddddddddd asddddd'),
];

mock[0].progress = 89;
mock[1].progress = 70;
mock[2].progress = 5;
mock[3].progress = 90;

mock[0].id = 1;
mock[1].id = 2;
mock[2].id = 3;
mock[3].id = 4;

mock[3].completed = true;

function Dashboard(props) {
	const classes = useStyles();
	const history = useHistory();
	const { getUserGoals, editGoalById } = props;

	const [filterValue, setFilter] = React.useState('');
	
	useEffect(() => {
		try {
			getUserGoals();
		} catch (e) {
		}
	});

  function handleInput(value) {
    setFilter(value);
  }

  function filterPipe(list) {
    list.sort((el, ev) =>
      el.completed === ev.completed ? 0 : el.completed ? 1 : -1
    );

    return list.filter((el) => el.title.includes(filterValue));
  }

  function getListItem(event, id) {
    if (
      event.target.nodeName !== 'BUTTON' &&
      event.target.nodeName !== 'SPAN'
    ) {
			// переходим на страницу таски по айди
			history.push(`/account/goals/${id}`);
      console.log(event.target);
      return;
    }
    return;
  }

	function checkTask(id) {
		editGoalById(id);
    console.log(id);
    // отправляем запрос на обновление прогресса таски
    return;
  }

  function changeRoute(path) {
    props.history.push(path);
  }

  return (
    <Box className={classes.dashboardWrapper}>
      <Box className={classes.taskListWrapper}>
        <Box className={classes.searchWrapper}>
          <TextField
            onInput={(ev) => handleInput(ev.target.value)}
            label="Search"
            size="small"
          />

          <Button
            variant="contained"
            color="secondary"
            className={classes.addButton}
            onClick={() => {
              changeRoute('/dashboard/addnew');
            }}
          >
            Add Task
          </Button>
        </Box>

        <List className={classes.taskList}>
          {filterPipe(mock).map((el) => (
						<>
							<ListItem
								key={el.id}
                onClick={(event) => getListItem(event, el.id)}
                divider
                className={
                  el.completed
                    ? classes.listElementDisabled
                    : classes.listElement
                }
              >
                <Typography
                  className={
                    el.completed
                      ? `${classes.taskText} ${classes.completed}`
                      : classes.taskText
                  }
                >
                  {el.title}
                </Typography>
                <Box className={classes.progressBar}>
                  <ProgressBar
                    color="primary"
                    variant="determinate"
                    value={calcPercentage(el.progress, el.term)}
                  />
                </Box>
                <Button
                  disabled={el.completed}
                  onClick={(event) => {
                    checkTask(event.target.id);
                  }}
                  color="primary"
                  variant="contained"
                >
                  Done
                </Button>
              </ListItem>
              <Divider className={classes.divider} />
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
}

const mapStateToProps = state => {
	return {
		isLogged: state.authReducer.isLoggedIn,
		message: state.messageReducer.message
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getUserGoals: () => {
			dispatch(getUserGoalsAction())
		},
		editGoalById: (id) => {
			dispatch(editGoalByIdAction(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));;
