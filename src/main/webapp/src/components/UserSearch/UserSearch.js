import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { InputAdornment, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { searchUsersAction } from '../../redux/actions/user';
import debounce from './Debounce';
import search from './SearchLogic';

const useStyles = makeStyles((theme) => (
  {
    field: {
      width: '100%',
			backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
  }
));


const UserSearch = ({candidates, onInput, onChange, options}) => {
  const classes = useStyles();

  const renderInput = (params) => {
    if (options.icon) {
      params.InputProps.startAdornment = (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      )
    }
    return <TextField
      {...params}
			className={classes.field}
			placeholder={options.label}
			size="small"
      variant="outlined"
    />
  }

  return (
    <Autocomplete
      id="search_user"
      options={candidates}
      filterOptions={(options, state) => search(options, state.inputValue)}
      freeSolo
      getOptionLabel={(option) => option.login}
      renderInput={renderInput}
      onInputChange={debounce(onInput, options.debounce || 1000)}
      onChange={onChange}
    />
  );
};

export default UserSearch;
