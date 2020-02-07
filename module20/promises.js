const asyncFunc = () => {
  setTimeout(() => console.log(12), 100)
};

console.log('func1');

// const promisedFunc = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('function promised');
//     resolve('reason');
//   }, 1000)
// });
//
Promise.resolve(12)
  .then(
    (resolved) => console.log('then ', resolved)
  )
  .then(() => console.log('thenthen'))
  .finally(() => console.log('finally exit'))
  .then(() => console.log('thenthenthen'))
  .catch((error) => console.log(error))
//
// console.log(12, 13, 14)
// console.log(12, 13, 14)
// console.log(12, 13, 14)
// console.log(12, 13, 14)
// Promise.resolve(12).then((n) => console.log(n));
//
// const syncFunc = () => {
//   console.log(1);
//   console.log(2);
//   return Promise.resolve('ok')
// };
//
// syncFunc().then((n) => console.log(n));

const promised1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1);
    resolve(1)
  }, 1000)
});
const promised2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(2);
    resolve(2)
  }, 2000)
});
const promised3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(3);
    resolve(3)
  }, 3000)
});

// Promise.all([promised1, promised2, promised3]).then(
//   ([answer1, answer2, answer3]) => {
//     console.log(answer1, new Date());
//     console.log(answer2, new Date());
//     console.log(answer3, new Date());
//   }
// );
//
// Promise.race([promised1, promised2, promised3]).then(
//   (answer) => console.log('race', answer)
// );

