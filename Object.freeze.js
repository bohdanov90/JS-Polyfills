// ----------------------- 14. Object.freeze() -> makes object invulnerable to user change its properties ---------------------------- //

Object.prototype.FREEZE = function(obj) {

  let freezedObject = {}, key; // creating new freezed object

  for (key in obj) { // iterate through keys in object
    freezedObject = Object.defineProperty(obj, key, { // add these hidden property flags to each key
      writable: false,
      configurable: false  
    });
  }

  return freezedObject; // returning freezed object

}

let obj1 = {
  name: "john",
  age: 29,
  isSmart: true
}

Object.FREEZE(obj1);
obj1.name = "kurt";
console.log(obj1.name);