const debounce = (func, wait) => {
  var timeout;
  return function () {
    const context = this;
    var args = arguments;
    var executeFunction = function () {
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(executeFunction, wait);
  };
};

export { debounce }