var createCounter = function (init) {
  let count = init;

  const increment = () => ++count;

  function decrement() {
    return --count;
  }
  function reset() {
    count = init;
    return reset;
  }
  return {
    increment,
    decrement,
    reset,
  };
};
