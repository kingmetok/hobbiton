function checkForOutdated(task) {
  new Date().getDate() - new Date(task.data_last_checked).getDate();
}

export default checkForOutdated;
