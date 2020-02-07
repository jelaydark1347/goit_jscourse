// function* generatorFunction() {
//   console.log('started 1st iteration');
//   yield 1;
//   console.log('started 2nd iteration');
//   yield 2;
//   console.log('started 3rd iteration');
//   yield 3;
//   console.log('finish');
// }

// const iterableGenerator = generatorFunction();
//
// console.log(iterableGenerator.next());
// //./..
// console.log('between two iterations');
// console.log(iterableGenerator.next());
// setTimeout(() => iterableGenerator.next(), 1000);
// console.log('fool');
// console.log(iterableGenerator.next());
// console.log(iterableGenerator.next());

// console.log([...iterableGenerator])

// for(let i of iterableGenerator) {
//   console.log('index:', i);
// }
// console.log(iterableGenerator.next());

const range = {
  from: 1,
  to: 12,
  *[Symbol.iterator]() {
    for(let i = this.from; i< this.to; i++) {
      yield i;
    }
  }
};

// console.log('range: ', [...range]);

const pseudoArray = {
  from: 22,
  to: 25,
  length: 12,
};

const collection = document.getElementsByTagName('div');

const arrayFromCollection = [...collection];
const arrayFromCollection2 = Array.from(pseudoArray);

// console.log('arrayFromCollection2', arrayFromCollection2);

function* generatorArrayFromTo(from, to) {
  for(let i = from; i<=to; i++) {
    yield i;
  }
};

// console.log([...generatorArrayFromTo(12, 18)]);
//
// const gen1 = generatorArrayFromTo(1, 3);
// const gen2 = generatorArrayFromTo(11, 12);
// const gen3 = generatorArrayFromTo(21, 25);

//
// function* allNumbers() {
//   yield* generatorArrayFromTo(1, 3);
//   yield* generatorArrayFromTo(11, 13);
//   yield* generatorArrayFromTo(21, 23);
// }
//
// const all = allNumbers();
//
// console.log(all.next());
// console.log(all.next());
// console.log(all.next());
// console.log(all.next());
// console.log(all.next());
// console.log(all.next());


// const waitForMe = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log('await for response from API');
//     console.log(all.next());
//     resolve(12)
//   }, 1000 )
// });

function* infinityGen () {
  let i = 0;
  while (true){
    yield i++
  }
};

const gen = infinityGen();
//
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


function* generatorFunction() {

  const result = yield 2 + 2;

  alert(result)
}

const question = generatorFunction();


console.log(question.next().value);
// question.next(4)



function* count(initialValue) {
  // const next = previous * 16807 % 2147483647; // previous - result;
  let value = initialValue;
  while (true) {
    yield value = value * 16807 % 2147483647;
  }
}

const pseudoRandomGen = count(1);

console.log(pseudoRandomGen.next()); // 16807
console.log(pseudoRandomGen.next()); // 282475249
console.log(pseudoRandomGen.next()); // 1622650073
console.log(pseudoRandomGen.next()); // 1622650073
