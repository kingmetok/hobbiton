import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    width: '90%',
    margin: '0 auto',
    padding: '2%',
    justifyContent: 'space-between',
    background: 'white',
    borderRadius: '3px',
  },

  defaultTasksList: {
    width: '10%',
  },

  listWrapper: {
    width: '58%',
    borderRight: '1px solid black',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },

  list: { width: '98%' },

  header: {
    fontSize: '30px',
  },

  listItem: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'baseline',
    transition: '0.3s',

    '&:hover': {
      background: 'lightblue',
      transition: '0.3s',
      cursor: 'pointer',
    },
  },

  title: {
    width: '20%',
  },
  description: {
    width: '68%',
  },
  term: {
    width: '12%',
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
});

export default useStyles;
