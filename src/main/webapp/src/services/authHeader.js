const authHeader = () => {
	const jwt = JSON.parse(localStorage.getItem('jwt'));
  if (jwt) {
		return {
			Authorization: 'Bearer ' + jwt,
			'Content-Type': 'application/json'
		};
  } else {
    return {};
  }
}

export default authHeader;