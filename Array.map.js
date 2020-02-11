// ----------------------- 7. Array.map() -> applies calculations on each element of array and returns new array ----------------------- //

Array.prototype.MAP = function(func) {
 
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(func(this[i])); // applying callback to each element of array
  }

  return newArr; // returning new array

}

let arr = [1, 2, 3, 4, 5];

console.log(arr.MAP(el => el * 3));