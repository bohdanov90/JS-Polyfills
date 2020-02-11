// -------------------- 16. Array.every() -> returns true if all elements do satisfy a callback otherwise returns false ------------------- //

Array.prototype.EVERY = function(callback) {

  if (this.length === 0) return true; // return true if array is empty
  
  for (let i = 0; i < this.length; i++) { // returns false if at least one element doesn't satisfy a callback
    if (callback(this[i]) === false) return false;
  }

  return true; // otherwise true

}

let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.EVERY(el => el >= 2))