// -------------------------------- 2. Object.keys(obj) -> returns array of enumerable keys of object -------------------------------- //

Object.prototype.KEYS = function(obj) {

  // if we pass not an object as an agument throws an error
  if (typeof obj !== "object") throw new TypeError("You have passed non-object as an argument to the Object.KEYS method");
  
  let arr = [], key;

  for (key in obj) { // for each key in passed object

    if (Object.prototype.hasOwnProperty.call(obj, key)) { // if this object has keys push them into array
      arr.push(key);
    }

  }
  
  return arr;

}

let obj1 = {
  35: "bla",
  3: "bla",
  100: "bla"
}

let obj2 = [1, 5, 9, 8, 15];

let obj3 = {
  "name": "John",
  "age": 30,
  "occupation": "coder"
}

let obj4 = function() {
  return 15;
}

console.log(Object.KEYS(obj1));
console.log(Object.KEYS(obj2));
console.log(Object.KEYS(obj3));
console.log(Object.KEYS(obj4()));