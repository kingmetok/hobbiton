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

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const sort = (array) => {
	return array.sort((a, b) => a.points - b.points);
}

function Scoreboard({searchUsers, usersData}) {
	const classes = useStyles();
		useEffect(() => {
			searchUsers()
		}, [searchUsers]);
	console.log(usersData);

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
						console.log(row.id);
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
