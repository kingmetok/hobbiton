function checkForOutdated(task) {
  let dateDifference =
    new Date().getDate() - new Date(task.data_last_checked).getDate();

  if (dateDifference >= 2) {
    console.log('outdated');
  } else if (dateDifference < 2) {
    console.log('in time');
  }
}

export default checkForOutdated;
