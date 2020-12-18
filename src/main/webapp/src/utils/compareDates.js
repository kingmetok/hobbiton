function compareDates(date) {
  let dateNow = new Date();
  let dayNow = dateNow.getDate();
  let monthNow = dateNow.getMonth() + 1;
  let yearNow = dateNow.getFullYear();

  let dateInput = new Date(date);
  let dayInput = dateInput.getDate();
  let monthInput = dateInput.getMonth() + 1;
  let yearInput = dateInput.getFullYear();

  if (dayInput >= dayNow && monthInput >= monthNow && yearInput >= yearNow) {
    return true;
  } else {
    return false;
  }
}

export default compareDates;
