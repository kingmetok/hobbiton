function createTask(title, description, dateStarted) {
  let date = new Date();

  if (!dateStarted) {
    dateStarted = date;
  }

  let result = {
    title: title,
    description: description,
    progress: 0,
    term: 90,
    data_created: date,
    dateStarted: dateStarted,
    data_last_checked: new Date('2020-12-16T10:09:45.126Z'),
    completed: false,
    proofs: [],
  };

  return result;
}

export default createTask;
