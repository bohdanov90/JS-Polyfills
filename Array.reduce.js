// --------------- 12. Array.reduce() -> applies callback function onto each element of array and returns total value ------------------ //

Array.prototype.REDUCE = function(callback, inititalValue) {

  let total = 0; // creating total variable which will be a result of callback

  for (let i = 0; i < this.length; i++) { // adding each element to the total variable
    total += this[i];
  }
  
  if (inititalValue !== undefined) total += inititalValue; // if there is an initial value adding it to total variable

  return total; // returning result

}

let arr = [1, 2, 3, 4, 5];

console.log( arr.REDUCE((prev, next) => prev + next, 6) );