// ------------- 8. Array.forEach() -> iterates through array and applies callback on each element, doesn't return anything -------------- //

Array.prototype.FOREACH = function(callback) { 
  
  for (let i = 0; i < this.length; i++) { // applies callback to each element
    this[i] = callback(this[i]);
  }

}

let arr = [1, 2, 3, 4, 5];

arr.FOREACH(el => el * 2);

console.log(arr);