// ----------------------- 11. Array.join() -> joins all array elements into single string and returns this string ----------------------- //

Array.prototype.JOIN = function() {

  // if we haven't passed any separators as arguments to the menthod, set "," as separator
  if (arguments[0] === undefined && arguments.length === 0) { 
    arguments[0] = ","; 
  }
  
  let finalString = "", lastElement = ""; // creating variables to use them inside loop

  for (let i = 0; i < this.length; i++) { 

    // if any of the array elements are undefined or null convert them into empty string
    if (this[i] === undefined || this[i] === null) this[i] = ""; 

    if (i < this.length - 1) {

      this[i] = this[i] + arguments[0]; // adding separator after each array element except last
      finalString += this[i].toString(); // converting each array element into string and add to final string

    } else lastElement = this[i].toString(); // converting last array element into string without adding separator

  }

  return (finalString + lastElement); // returning final string

}

let arr = ["First", null, "Second", undefined, "Third"];

console.log(arr.JOIN("-"));