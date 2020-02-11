// ------------------------------- 4. Array.push -> adds element(s) to the end of array ------------------------------- //

Array.prototype.PUSH = function() {

  
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i]; // adding new arguments one by one to the end of array (this.length -> empty space for new argument)
  }

  return this.length;

};

let arr = [1, 2, 3, 4];

console.log(arr.PUSH(5, 6));
console.log(arr);