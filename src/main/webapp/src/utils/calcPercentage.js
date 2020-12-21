function calcPersentage(progress, term) {
  if (progress >= term) {
    return 100;
  }
  return Math.floor((progress * 100) / term);
}
export default calcPersentage;
