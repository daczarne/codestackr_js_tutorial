# How to add JavaScript to a web page

We can include JavaScript in an HTML component. For example, if we want an alert message to pop up when the user clicks on a button, we could do

``` html
<button onclick="alert('Success')">Click Me</button>
```

Additionally, we could include a `<script>` tag in the `<head>`. Problem with this is that the JavaScript code will be executed before the DOM is resolved and the page rendered. There might be instances where this is the desiered behaviour for our page, but in general, it is best to include JavaScript in a web page by adding a `<script>` tag right before we close the `<body>`.

Even though this last option is better than including JS code in a tag or including it at the top of the webpage, in general, we write all the JS code in a separate file. We do this to follow the principle of **Separation of concerns**, just as we write CSS in a separete file. To do this, we use a `<script>` tag with a `src` attribute at the bottom of the `<body>`.

```html
<script src="main.js"></script>
```

---
> I'm using a single HTML file here. To follow through with the notes, change the JS file used in it.
---

We can check the results of an execution in the *Console* tab in Chrome devtools.

# Comments

In JavaScript we can add comments into the code by adding `//` for single-line comments, or `/*` and `*/` to open and close multi-line comments respectively.

``` js
// Single line comment

/* 
  Multi-line
  comment
*/
```

# Line termination

In most cases in JavaScript we are requiered to include a semi-colon at the end of each line, `;`. Even though it's not always requiered, best practice is to always include it.
