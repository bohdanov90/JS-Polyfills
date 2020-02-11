// --------------------------- 9. Array.filter() -> creates new array with only elements satisfying callback --------------------------- //

Array.prototype.FILTER = function(func) {

  let newArr = [];

  for (let i = 0; i < this.length; i++) { // if element sastisfies callback adds it to new array
    if (func(this[i])) newArr.push(this[i]);
  }

  return newArr; // returning new array

}

let arr = [1, 2, 3, 4, 5]
console.log(arr.FILTER(el => el > 2));