const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('jwt'));

  if (user) {
		return {
			Authorization: 'Bearer ' + user.accessToken,
			'Content-Type': 'application/json'
		};
  } else {
    return {};
  }
}

export default authHeader;