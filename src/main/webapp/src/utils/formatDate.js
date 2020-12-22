function getFormattedDate() {
  return `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;
}

export default getFormattedDate;
