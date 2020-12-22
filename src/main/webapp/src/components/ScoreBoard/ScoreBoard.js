import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { searchUsersAction } from '../../redux/actions/user';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme =>({
  table: {
    minWidth: 650,
	},
	tableHeader: {
		background: theme.palette.grey[200],
	}
}));


const sort = (array) => {
	return array.sort((a, b) => b.points - a.points );
}

function Scoreboard({searchUsers, usersData}) {
	const classes = useStyles();
		useEffect(() => {
			searchUsers()
		}, [searchUsers]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow className={classes.tableHeader}>
            <TableCell>Login</TableCell>
            <TableCell align="right">Points</TableCell>
            <TableCell align="right">Achievements</TableCell>
            {/* <TableCell align="right">Joined in</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
					{sort(usersData).map((row) => {
						return (
							<TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.login}
              </TableCell>
              <TableCell align="right">{row.points}</TableCell>
              <TableCell align="right">{row.achievements}</TableCell>
              {/* <TableCell align="right">{row.carbs}</TableCell> */}
            </TableRow>
						)
					})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const mapStateToProps = (state) => {
  return {
		usersData: state.userReducer.usersDataBySearch,
  };
};
const mapDispatchToProps = (dispatch) => {
	return {
		searchUsers: () => {
			dispatch(searchUsersAction())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
