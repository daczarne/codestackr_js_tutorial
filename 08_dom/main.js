// Single element selectors

const list = document.getElementById('list');
console.log(list);

const list2 = document.querySelector('#list');
console.log(list2);

const listItems = document.querySelector('.list-item');
console.log(listItems);


// Multiple element selector

const listItems2 = document.querySelectorAll('.list-item');
console.log(listItems2);

listItems2.forEach(item => {
  console.log(item.textContent);
});


// DOM manipulation

list.firstElementChild.remove();

list.lastElementChild.remove();

list.firstElementChild = 'New item';

list.firstElementChild.innerHTML = '<h1>New item</h1>';

list.lastElementChild.style.background = 'red';
list.lastElementChild.style.color = 'white';
