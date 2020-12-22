import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    userSelect: 'none',
    color: theme.palette.text.secondary,
    width: '100%',
  },
  imageWrapper: {
    width: '100px',
  },
  badge: {
    width: '100%',
    height: 'auto',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  title: {
    margin: 'auto',
    marginBottom: '1em',
  },
}));

export default useStyles;
