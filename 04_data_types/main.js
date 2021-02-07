// String literal

let userName = 'John';

console.log(userName);

userName = 'Mary';

console.log(userName);

userName += ' Smith';

console.log(userName);

// Number literals
let age = 30;

console.log(age);

let message = userName + ' is ' + age;

console.log(message);

message = `${userName} is ${age} years old`;

console.log(message);

age += 5;

console.log(age);

// Booleans
let lovesCats = true;

console.log(lovesCats);

// null

let color = null;

console.log(color);

// undefined

let list;

console.log(list);

// Array literals (numbers)

const numbers = new Array(1, 2, 3, 4, 5, 6);

console.log(numbers);

console.log(numbers[2]);

numbers[2] = 9;

console.log(numbers);

const newNumbers = [1, 2, 3];

console.log(newNumbers);

// Array literals (strings)

const colors = ['red', 'blue', 'green', 'yellow'];

console.log(colors);

// Adding elements to an array

colors[4] = 'black';

console.log(colors);

// Methods and properties

console.log(colors.length);

colors.push('white');

console.log(colors);

let lastColor = colors.pop();

console.log(colors);
console.log(lastColor);

let firstColor = colors.shift();

console.log(colors);
console.log(firstColor);
console.log(colors.indexOf('yellow'));

// Multi-type array

const myArray = ['red', 4, true, null];

console.log(myArray);

// Arrays of arrays

const myNewArray = ['red', 4, true, null, [1, 2, 3]];

console.log(myNewArray);
console.log(myNewArray[0]);
console.log(myNewArray[4][0]);

// Object literals

const person = {
  firstName: 'Johm',
  lastName: 'Smith',
  age: 30,
  pets: ['dogs', 'cats'],
  address: {
    street: '123 Street',
    city: 'Huston',
    state: 'Texas'
  }
}

console.log(person);

// Dot notation

console.log(person.firstName);

// Bracket notations
console.log(person['lastName']);

// Variable
let key = 'age';

console.log(person[key]);

// Accessing

console.log(person.pets);
console.log(person.pets[0]);
console.log(person.address);
console.log(person.address.state);
console.log(person.address['city']);

// Adding items

person.emial = 'john@email.com';

console.log(person.emial);

// Delete keys

delete person.age;

console.log(person);

// Deconstructing

const { firstName, lastName } = person;

console.log(person);
console.log(firstName, lastName);

const { address: {city} } = person;

console.log(city);

// Arrays of objects

const people = [
  {
    firstName: 'Johm',
    lastName: 'Smith',
    age: 30,
    pets: ['dogs', 'cats'],
    address: {
      street: '123 Street',
      city: 'Huston',
      state: 'Texas'
    }
  },
  {
    firstName: 'Mary',
    lastName: 'Poppins',
    age: 29,
    pets: ['dogs', 'cats'],
    address: {
      street: '123 Street',
      city: 'Huston',
      state: 'Texas'
    }
  }
]

const peopleJSON = JSON.stringify(people);

console.log(peopleJSON);

console.log(JSON.parse(peopleJSON));
