import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  aboutContent: {
    fontSize: '1.2em',
  },
  title: {
    textAlign: 'center',
    color: theme.palette.secondary.main,
    fontSize: '2em',
    marginBottom: '1em',
  },
  accent: {
    fontSize: '1.4em',
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: '100%',
  },
  list: {
    listStyle: 'none',
    width: '80%',
    margin: 'auto',
  },
  listItem: {
    marginBottom: '1em',
  },
  itemTitle: {
    textAlign: 'center',
    marginBottom: '0.5em',
  },
  description: {
    fontSize: '1.2em',
    width: '80%',
    margin: 'auto',
  },
  subTitle: {
    marginBottom: '1em',
    textAlign: 'center',
  },
}));

export default useStyles;
