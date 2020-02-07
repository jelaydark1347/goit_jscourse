fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data));

///+ async
// const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

const getPost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
  return 2;
};


// getPost();
function* createGenerator () {
  const response = yield fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = yield response.json();
  console.log(data);
};

const async = () => {
  const generator = createGenerator();

  function next(value) {
    const nextResult = generator.next(value);
    if (nextResult.done) {
      return nextResult.value;
    }
    nextResult.value.then(next)
  }

  next();
};

async();


// const async = () => {
//   const generator = createGenerators();
//
//   function next (value) {
//     console.log('next', value);
//     const nextResult = generator.next(value);
//     console.log('nextResult', nextResult);
//     if (nextResult.done) {
//       return nextResult.value
//     }
//     nextResult.value.then(next)
//   }
//
//   next()
// };
//
// async();
//
// Number.prototype[Symbol.iterator] = function() {
//   return {
//     current: 0,
//     finish: this,
//     next() {
//       if (this.current <= this.finish) return { value: this.current++, done: false };
//       return { value: undefined, done: true }
//     }
//   }
// };
//
// for (let i of 5) {
//   console.log(i)
// }
