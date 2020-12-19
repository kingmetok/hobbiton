import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  dashboardWrapper: {
    width: '90%',
    margin: '0 auto',
  },
  taskList: {
    width: '100%',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  listElement: {
    background: 'white',
    borderRadius: '2px',
    display: 'flex',
    justifyContent: 'space-between',
    transition: '0.3s',

    '&:hover': {
      background: 'lightblue',
      transition: '0.3s',
      cursor: 'pointer',
    },
  },
  listElementDisabled: {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'lightgray',
  },
  divider: {
    height: '3px',
  },
  taskListWrapper: {
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  },
  addButton: {
    alignSelf: 'flex-end',
    background: 'lightblue',
  },
  taskText: {
    width: '20%',
    textAlign: 'left',
    borderRight: 'solid 1px black',
    fontFamily: 'Roboto',
    fontSize: '20px',
  },
  progressBar: {
    width: '70%',
  },
  searchWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  completed: {
    color: 'white',
  },
});

export default useStyles;
