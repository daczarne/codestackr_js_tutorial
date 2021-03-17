// Functions

function hello() {
  console.log('Hello world');
}

hello();

// Arguments

function greet(name) {
  console.log('Hello ' + name);
}

greet('John');

function greet2(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}`);
}

greet2('John', 'Smith');

// Function that calculates a percentage

function convertPercent(num) {
  return num / 100;
}

console.log(convertPercent(2));

console.log(convertPercent('2'));

console.log(convertPercent('Hello'));

// Arrow function

const convertPercentArrow = (num) => {
  return num / 100
}

console.log(convertPercent(50));

// Less verbose arrow function

const convertPercentArrow2 = num => num / 100;

console.log(convertPercentArrow2(75));
