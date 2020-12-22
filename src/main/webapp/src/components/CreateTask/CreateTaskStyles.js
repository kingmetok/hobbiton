import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
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

  buttonWrapper: {
    width: '40%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
  },

  header: {
    fontSize: '30px',
  },
});

export const helperText = {
  position: 'absolute',
  bottom: '-33%',
};
