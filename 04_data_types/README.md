# Data Types

In JavaScript we have **Primitive** data types and **Reference** data types.

## Primitive data types

- `string literals` are used for strings. This variables can be reasigned. We can concatenate strings with the `+` operator. When concatenating, we can use the augmentation operator `+=`. We can also concatenate a string with other variable types are the other variables will be cast to string at runtime.

We can use either `"` or `'` when declaring string literals. We can include the other type of quotation inside de one used in the value, or we can use the same ones and use the escape character `\` to turn them into literal quotation marks. We can also use backticks to create template literals. Variables used inside the template need to be demarcated with `${varName}` and they will be evaulated at runtime before parsing the string. This is the preferred method when building strings using variables.

- `number literals` are used for integers and doubls. JavaScript supports all basic arithmetic operations: `+`, `-`, `*`, and `/`. We can also use them in augmentation operations with `+=`, `-=`, `*=`, and `/=`.

- `boolean literas` take either the value `true` or `false`

- `null` represents the absence of a value

- `undefined` is the value all declared and un-assigned variables get until a value is assigned to them.

## Reference data types

- `array literals` are 0-indexed collections of values (lists). It is not requiered that all elements be of the same primitive type. We can declare a new array by way of

```js
const numbers = new Array(1, 2, 3);
```

We can use braket notation `objectName[i]` to access the i-th element of the array. We can also use this notation to re-assign a value in the array. For example,

```js
numbers[2] = 9;
```

will change the thrid element of the array from its original value, 3, to 9. This is considered *mutating the array* which means that we can go ahead and do it, even if we declared the array using the `const` keyword.

The more modern way of initializing arrays is with the use of `[]`.

```js
const numbers = [1, 2, 3];
```

Arrays call also be used with strings

```js
const colors = ['red', 'blue', 'green', 'yellow'];
```

We can add elements to an array by placing them in the (i+1)-th index position.

```js
colors[4] = 'black';
```

Arrays have methos and properties. We can access them by using the `.` operator. For example, `colors.length` will return the length of the colors array. This is a property of the array. Methods, unlike properties, requier `()`. For example, 

``` js
colors.push('white');
``` 

will add the color `white` at the end of the array. We use the `colors.pop()` method to remove the last element of the array. We can assign the popped value to a variable. If we want to remove the first item, we use the `colors.shift()` method.

We can use the `indexOf()` method to find the index of a specific item in the array

``` js
colors.indexOf('yellow');
```

Since elements in an array can be of any type, they can also be of type `array`. These are called nested-arrays.

``` js
const myNewArray = ['red', 4, true, null, [1, 2, 3]];
```

We can use double brackets to access this arrays.

## Object literals

Objects are collections of key-value pairs. We use objects to keep together related values. We can initalize an object as follows:

``` js
const person = {
  firstName: 'Johm',
  lastName: 'Smith',
  age: 30
}
```

We can access the values using the dot notation, like so: `person.firstName`. We can also we bracket notation, like so: `person['lastName']`. If we don't know the key, we can use a variable, like so

``` js
let key = 'age';
console.log(person[key]);
```

We can have arrays inside our objects, and even objects or array of objects inside out objects.

``` js
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
```

We can then use combinations of dot, braket, and variable notations to access the different elements in the object.

``` js
console.log(person.pets);
console.log(person.pets[0]);
console.log(person.address);
console.log(person.address.state);
console.log(person.address['city']);
```

We can also use the dot notation to add elements to an object.

``` js
person.emial = 'john@email.com';
console.log(person.emial);
```

We can delete items from an object with the `delete` keyword. We can also pull elements out of the object. This is called **deconstructing**. For example

``` js
const { firstName, lastName } = person;
console.log(person);
console.log(firstName, lastName);
const { address: {city} } = person;
console.log(city);
```

We can also have arrays of objects.

``` js
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
```

We can then use the `JSON.stringify(people)` method to turn it into a string (we could use this, for exmaple, if we want to send it to a server). If insetead we got the stringfied version for a server, we can use the `JSON.parse()` method to turn it into an object.
