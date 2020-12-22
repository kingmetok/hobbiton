import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dashboardWrapper: {
    width: '90%',
    margin: '0 auto',
  },
  contentImage: {
    width: '50%',
    opacity: ' 0.5',
    height: '100%',
    transition: '0.5s',
  },
  contentBoxWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    '&:hover': {
      contentImage: {
        opacity: '0.9',
        transition: '0.5s',
      },
    },
  },
  contentTextWrapper: {
    width: '40%',
    margin: '0 40px',
  },
  contentText: {
    fontSize: '1.2em',
  },
  title: {
    fontSize: '2em',
  },
}));

export default useStyles;
