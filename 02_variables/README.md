# Variables

Variables are used to store data in memory temporarily. In ES5, variables used to be declared with the keyword `var` like so:

``` js
var <name> = <value>;
```

In ES6 an alternative way was introduced: the `let` keyword.

``` js
let <name> = <value>;
```

Since ES6 came out we don't use `var` anymore to avoid the issues it had.

Variables can be initialized with the keyword `let` and a key-value pair (just as in anyother language), or they can be declared and assigned later on. We can also re-assign a different value to a variable afterwards. Variables that are declared but have no value assign to them are `undefined`.

``` js
let <name>;
<name> = <value1>;
<name> = <value2>;
```

Rules for variable names in JavaSript:

- variable names are case-sensitive

- variable names should be meaningful and descriptive

- they can not start with a number

- they can not contain spaces or hyphens

- they can not be a reserved word

- use lowerCamelCase

We can declare multiple variables in a single line by separating them with commas. We can then assign them one by one:

``` js
let a, b, c;
a = 1;
b = 2;
c = 3;
``` 

We can also initialize multiple vairables in the same line separating them with commas:

``` js
let a = 1, b = 2, c = 3;
``` 

Inspite of this, the modern best-practice it to declare them in separated lines

``` js
let a = 1;
let b = 2;
let c = 3;
``` 

