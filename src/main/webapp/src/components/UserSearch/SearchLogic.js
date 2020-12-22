const usersMatching = (key, str) => user => {
  return user[key].toLowerCase().startsWith(str.toLowerCase());
}

const searchUserBy = (data, key, str) => data.filter(usersMatching(key, str));

const usersByLogin = (data, str) => searchUserBy(data, 'login', str);
// const usersById = (data, str) => searchUserBy(data, 'id', str);

const noResult = () => [];
const result = (data, str) => [...usersByLogin(data, str)];

const search = (data, str) => !str ? noResult : result(data, str);
export default search;
