const btn = document.createElement('button');
document.body.append(btn);

btn.addEventListener('click', () => {
  setTimeout(() => console.log('click 1'), 0);
  Promise.resolve().then(() => console.log('promise1'))
});

btn.addEventListener('click', () => {
  setTimeout(() => console.log('click 2'), 0);
  Promise.resolve().then(() => console.log('promise2'))
});

btn.click()