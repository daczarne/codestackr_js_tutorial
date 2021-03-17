# Funtions

Functions are reusable pieces of code that perform tasks or calculate and return values. Technically, they are a reference type. Functions are declared with the `function` keyword, followed by the name of the function.

Arrow functions are defined as `const` objects with an arrow `=>` following the parameters.

```javascript
const convertPercent = (num) => {
  return num / 100
}
```

We can simplify the notation with arrow functions. If there's only one argument to be passed to the function call, then we don't need the parenthesis around the argument names when declaring it. We can also omit the `return` keyword and the braces.

```javascript
const convertPercent = num => num / 100;
```
