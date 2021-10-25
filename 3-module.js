//use CommonJS , every file in node is a module
//Modules == encapsulated code (only share minimum)
const sayHello = (name) => {
  console.log(`Hi ${name}`);
};

module.exports = sayHello;
