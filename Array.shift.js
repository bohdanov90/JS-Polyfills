// -------------- 5. Array.shift() -> deletes first element of non-empty array and returns it, else returns undefined -------------- //

Array.prototype.SHIFT = function() {

  if (this.length > 0) { // if array is not empty
    
    let deletedElement = this[0]; // assigning first element to a variable;
    delete this[0]; // deleting first element
  
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i+1]; // moving each element forward
    }
  
    this.length = this.length-1; // adjusting array length
    return deletedElement; // returning deleted element

  } else return undefined; // if array is empty
  
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.SHIFT());
console.log(arr);