// ------------------ 1. Object.create(obj) -> creates new object with its prototype set to obj we pass as parameter -------------------- //

Object.CREATE = function objectCreate(proto) {

  // if we pass a non-object as an agument throws a type error
  if (typeof proto !== "object") throw new TypeError("Parameter you are truing to pass to the function isn't an object");
  
  let Func = new Function; // function contructor creates new function

  // setting prototype of newly created function to the object we are passing as the argument to the Object.CREATE method
  Func.prototype = proto; 

  return new Func; // returning it
  
}

let obj1 = {
  name: "Alex",
  age: 29,
};

let obj2 = Object.CREATE(obj1);
let obj3 = Object.CREATE(obj1);

console.log(obj2.name);
console.log(obj3.age);