// // console.log('aa')
// //
// // const btn = document.querySelector("button");
// //
// // console.log('btn', btn);
// //
// // const handler = () => {
// //   alert('hello!');
// //   btn.onclick = null;
// // };
// //
// // const handlerListener = () => alert('handlerListener');
// // const handlerListener2 = () => alert('handlerListener2');
// // //
// // btn.onclick = handler;
//
// // btn.addEventListener('click', () => {
// // //   alert('handlerListener');
// // //   btn.removeEventListener('click', )
// // // });
// // btn.addEventListener('click', handlerListener2);
// const btnADD = document.getElementById('add-btn');
// const btnSTOP = document.getElementById('stop-btn');
// const btnMAKE = document.getElementById('make-btn');
//
// const make = () => alert('make!');
//
// btnADD.addEventListener('click', () =>
//   btnMAKE.addEventListener('click', make));
//
//
// btnSTOP.addEventListener('click', (e) => {
//   alert(e.type, 'сработал');
//   console.log(e)
// });
//   // btnMAKE.removeEventListener('click', make));
//
// // btnMAKE.addEventListener('mousedown', (e) => {alert('mousedown'));
// // btnMAKE.addEventListener('click', () => alert('click'));
// // btnMAKE.addEventListener('mouseup', () => alert('mouseup'));
//
// const enterChecker = ({ charCode }) => {
//   if(charCode === 13) {
//     alert('CONGRATULATULATION!')
//   }
// };
//
// document.getElementById('inputID')
//   .addEventListener('keypress', enterChecker);
//
// const stopGoingGoogle = (e) => {
//   e.preventDefault();
//   const { target } = e;
//   console.log(target);
//   alert('link: ', target.innerHTML)
// }
//
// document.querySelector('a')
//   .addEventListener('click', stopGoingGoogle);
//
// const form = document.querySelector('form');
// const name = document.querySelector('#name');
// const email = document.querySelector('#email');
//
// const onSubmit = (e) => {
//   e.preventDefault();
//   alert(`hello ${name.value}, ${email.value}`)
//   if (email.value.split('@')[1] === 'google.com') {
//     const js = {
//       name: name.value,
//       email: email.value,
//     }
//     console.log('sent', js)
//   }
//
//
// };
//
// form.addEventListener('submit', onSubmit)


/**
* 1) получить pool.
* 2) person
* 3) pool -> click
* 4) coordinates
* 5) move person
* */

const pool = document.getElementById('pool');
const person = document.getElementById('person');

const onClick = (e) => {
  const { clientX, clientY } = e
  person.style.top = `${clientY}px`;
  person.style.left = `${clientX}px`;
};

pool.addEventListener('click', onClick);


const sp = document.getElementById('na');
const input = document.getElementById('in');

sp.addEventListener('click', () => input.focus())

document.addEventListener('DOMContentLoaded', () => alert('реклама'))
person.remove();