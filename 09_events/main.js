const btn = document.getElementById('my-btn');

// Click event
btn.addEventListener('click', (e) => {
  console.log(e);
});


// Mouse over
btn.addEventListener('mouseover', (e) => {
  btn.style.background = 'blue';
});


// Mouse out
btn.addEventListener('mouseout', (e) => {
  btn.style.background = 'green';
});
