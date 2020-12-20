function createTask(title, description, data_started) {
  let date = new Date();

  if (!data_started) {
    data_started = date;
  }

  let result = {
    title: title,
    description: description,
    progress: 0,
    term: 90,
    data_created: date,
    data_started: data_started,
    data_last_checked: '',
    completed: false,
    proofs: [],
  };

  return result;
}

export default createTask;
