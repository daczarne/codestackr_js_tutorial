# DOM

The **DOM** is the Document Object Model. This is how we can manipulate things on the web page. The DOM is a tree-like structure of the entire web page.

## Element selectors

In order to modify the elements, we first need to select them. For example, the below code snippet will console log the element with id `list`:

``` javascript
const list = document.getElementById('list');
console.log(list);
```

We can also use the `querySelector` method of the `document` object:

``` javascript
const list = document.querySelector('#list');
console.log(list);
```

The difference is that `querySelector` only returns the first match on the document. To select all, we have to use `querySelectorAll`. This will return an array of all items.

## DOM manipulation

We can use the attributes of the DOM objects to manipulate it.
