const obj = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = obj.getX;
console.log(unboundGetX()); // Output: undefined

const boundGetX = unboundGetX.bind(obj);
console.log(unboundGetX())
console.log(boundGetX()); // Output: 42
