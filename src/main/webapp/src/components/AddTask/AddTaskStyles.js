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
});

export default useStyles;
