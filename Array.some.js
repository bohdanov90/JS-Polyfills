// ---------------- 15. Array.some() -> returns true if at least one element satisfies a callback otherwise returns false ------------------ //

Array.prototype.SOME = function(callback) {

  if (this.length === 0) return false; // return false if array is empty
  
  for (let i = 0; i < this.length; i++) { // returns true if at least one element satisfies a callback
    if (callback(this[i])) return true;
  }
  
  return false; // otherwise false

}

let arr = [1, 3, 5];

console.log(arr.SOME(el => el % 2 === 0));