function createSeasonTask(title, description, season) {
  let date = new Date();

  let result = {
    title: title,
    description: description,
    season: season,
    data_created: date,
    completed: false,
    progress: 0,
    term: 1,
    proofs: [],
  };

  return result;
}

export default createSeasonTask;
