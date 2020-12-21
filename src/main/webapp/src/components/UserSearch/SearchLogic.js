const usersMatching = (key, str) => user => {
  return user[key].toLowerCase().startsWith(str.toLowerCase());
}

const searchUserBy = (data, key, str) => data.filter(usersMatching(key, str));

const usersByName = (data, str) => searchUserBy(data, 'username', str);
const usersById = (data, str) => searchUserBy(data, 'id', str);

const noResult = () => [];
const result = (data, str) => [...usersByName(data, str), ...usersById(data, str)];

const search = (data, str) => !str ? noResult : result(data, str);
export default search;
