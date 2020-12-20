import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
  link: {
    width: '100%',
    textDecoration: 'none',
    color: theme.palette.grey[800],
  },
  seasonTask: {
    border: '1px solid',
    borderRadius: '2px',
    boxSizing: 'border-box',
  },
  Winter: {
    borderColor: 'blue',
    background: 'rgb(95,112,204)',
    background:
      'radial-gradient(circle, rgba(95,112,204,1) 0%, rgba(0,212,255,1) 100%)',
  },
  Spring: {
    borderColor: 'green',
    background: 'rgb(50,249,85))',
    background:
      'radial-gradient(circle, rgba(50,249,85,1) 0%, rgba(73,128,76,1) 100%)',
  },
  Summer: {
    borderColor: 'red',
    background: 'rgb(251,36,36)',
    background:
      'radial-gradient(circle, rgba(251,36,36,1) 0%, rgba(145,30,30,1) 100%)',
  },
  Autumn: {
    borderColor: 'orange',
    background: 'rgb(251,173,36)',
    background:
      'radial-gradient(circle, rgba(251,173,36,1) 0%, rgba(176,109,22,1) 100%)',
  },
}));

export default useStyles;
