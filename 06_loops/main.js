// While loops

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}


// For loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}


// Looping through arrays

const people = [
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
  },
  {
    firstName: 'Mary',
    lastName: 'Smith',
    age: 28,
  }
]

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
  console.log(people.firstName);
}

for (let person of people) {
  console.log(person.age);
}


// High order array methods

people.forEach(function (person) {
  console.log(person);
});

people.forEach(function (person) {
  console.log(person.firstName);
});

people.forEach(person => console.log(person.age));


// Map

const personName = people.map(person => person.firstName);

console.log(personName);


// Filter

const personAgeUnder30 = people.filter(person => person.age < 30);

console.log(personAgeUnder30);

