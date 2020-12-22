const debounce = (func, wait, immediate) => {
  let debTimeout;
  return (...args) => {
    const context = this;
    const later = () => {
      debTimeout = null;
      if (!immediate) func.apply(context, args);
    };
    const isCallNow = (immediate && !debTimeout);
    clearTimeout(debTimeout);
    debTimeout = setTimeout(later, wait);
    if (isCallNow) func.apply(context, args);
  };
};
export default debounce;