// ------------------- 3. Array.pop() -> deletes last element of non-empty array and returns it, else returns undefined ------------------- //

Array.prototype.POP = function() {
  
  if (this.length > 0) { // if array is not empty

    let deletedElement = this[this.length - 1]; // assigning last element to a variable;
    delete this[this.length - 1]; // deleting last element
    this.length = this.length - 1; // adjusting array length
    return deletedElement; // returning deleted element

  } else return undefined; // if array is empty
  
}

let arr = [1, 2, 3, 4];

console.log(arr.POP());
console.log(arr);