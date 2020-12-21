function createTask(title, description, dateStarted) {
  let date = new Date();

  if (!dateStarted) {
    dateStarted = date;
  }

	let result = {
		dateStarted: dateStarted,
    title: title,
    description: description,
    progress: 0,
    term: 90,
    data_created: date,
    data_last_checked: dateStarted,
    completed: false,
    proofs: [],
  };

  return result;
}

export default createTask;
