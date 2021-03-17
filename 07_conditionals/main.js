// if else statments

let color = 'red';

if (color == 'red') {
  console.log(true);
}


// Double vs triple equals

// Double equals don't match data types
let age = 30;

if (age == '30') {
  console.log(true);
}

// Triple equal signs will match data types
if (age === '30') {
  console.log(true);
} else {
  console.log(false);
}

// Kind of...
if (age === 30.0) {
  console.log("Double", true);
} else {
  console.log(false);
}

// Same applies to not equal
if (age != 30) {
  console.log(true);
} else {
  console.log(false);
}

if (age !== 30) {
  console.log(true);
} else {
  console.log(false);
}


// And

if (18 < age && age < 35) {
  console.log(true);
}


// Or

if (18 < age || age < 35) {
  console.log(true);
}


// Else if

if (age > 30) {
  console.log('Greater than 30');
} else if (age > 25) {
  console.log('Greater than 25');
} else {
  console.log('Less than 25');
}


// Return comparisons

let a = 1;
let b = 2;

function evaluate() {
  if (a < b) {
    return true;
  } else {
    return false
  }
}

console.log(evaluate());


function evaluate2() {
  return a < b;
}

console.log(evaluate2());


// Ternary operator

let animal = 'cat';
const likesCats = animal === 'cat' ? true : false;
console.log(likesCats);


// Switch

animal = 'bird';

switch (animal) {
  // if the animal is dog
  case 'dog':
    console.log('Dog');
    break
  // if the animal is cat
  case 'cat':
    console.log('Cat');
    break
  // if the animal is neither cat nor dog
  default:
    console.log('Neither');
    break
}

// Checking multiple parameters

animal = 'dog';

switch (animal) {
  // if the animal is either cat or dog
  case 'dog':
  case 'cat':
    console.log('Cat or Dog');
    break
  // if the animal is neither cat nor dog
  default:
    console.log('Neither');
    break
}
