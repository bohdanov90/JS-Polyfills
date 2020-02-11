// --------------------- 10. Array.reverse() -> reverses elements within array and returns reversed array --------------------- //

Array.prototype.REVERSE = function() {

  let newArr = []; // creating new array

  for (let i = 0; i < this.length; i++) { // copying all elements from old array into new array
    newArr[i] = this[i];
  }
  for (let i = 0; i < this.length; i++) { // copying all elements from new array into old array in reversed way
    this[i] = newArr[newArr.length - 1 - i];
  }
  
  return this; // returning old reversed array

}

let arr = [1, 2, 3, 4, 5];

console.log(arr.REVERSE());