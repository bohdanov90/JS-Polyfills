// ---------------------- 6. Array.unshift() -> adds element(s) at the beginnig of array and returns array length ---------------------- //

Array.prototype.UNSHIFT = function() {

  this.length = this.length + arguments.length; // changing array length
  
  for (let i = this.length; i >= arguments.length; i--) { // moving elements forward within array by the length of array
    this[i-1] = this[i - 1 - arguments.length];
  }

  for (let i = 0; i < arguments.length; i++) { // adding element(s) at the beginning of array
    this[i] = arguments[i];
  }

  return this.length;
}

let arr = [5, 6, 7, 8];

console.log(arr.UNSHIFT(1, 2, 3, 4));
console.log(arr);