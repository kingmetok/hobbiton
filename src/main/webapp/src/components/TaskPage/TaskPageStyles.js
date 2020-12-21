import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  taskPageWrapper: {
    width: '90%',
    margin: '0 auto',
    background: 'white',
  },
  taskPage: {
    width: '98%',
    margin: '0 auto',
    paddingBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
  },
  taskText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '30px',
    marginBottom: '10px',
  },
  progressBarWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  secondaryWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: '50vh',
  },
  descriptionWrapper: {
    width: '50%',
    margin: '10px',
  },
  descriptionText: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    borderBottom: '1px solid',
    marginBottom: '20px'
  },
  achievementsWrapper: {
    width: '50%',
    margin: '10px',
  },
});

export default useStyles;
