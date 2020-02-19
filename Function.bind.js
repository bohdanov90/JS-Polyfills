function BIND(func, context) {

  const args1 = Array.prototype.slice.call(arguments, 2); // creating array of rest arguments

  return function() {
    const args2 = Array.prototype.slice.call(arguments); // creating array of arguments passed to BIND
    return func.apply(context, args1.concat(args2)); // concatenating both arrays
  }

}


let person = {
  name: "Bob",
}

function info(age, job) {
  console.log(`Name: ${this.name}. Age: ${age}. Job: ${job}.`);
}

BIND(info, person, "29", "coder")();