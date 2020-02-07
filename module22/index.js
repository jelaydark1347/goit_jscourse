// const mySymbol = Symbol('id');

const mySymbol3 = Symbol('current id of selected array');
const mySymbol4 = Symbol('current id of selected array');
// const mySymbol2 = Symbol();

console.log(mySymbol3 === mySymbol4);

console.log('typeof', typeof mySymbol4);
console.log(mySymbol4);
// alert(mySymbol4.description);

const stringKeySymbol = Symbol('stringKey');

const myOwnObject = {
  'stringKey': 'stringKey',
  0: 0,
  [stringKeySymbol]: 'stringKeySymbol',
  [Symbol('stringKey')]: "Symbol('stringKey')",
};

console.log('myOwnObject[0]:', myOwnObject[0]);
console.log('myOwnObject["0"]:', myOwnObject["0"]);
console.log('myOwnObject["stringKey"]:', myOwnObject["stringKey"]);
console.log('myOwnObject[stringKeySymbol]:', myOwnObject[stringKeySymbol]);
console.log('myOwnObject[Symbol(\'stringKey\')]:', myOwnObject[Symbol('stringKey')]);

// const id = mySymbol4;
// console.log('mySymbol4===id', mySymbol4===id);

// const id = Symbol('id');
const descriptor1 = Symbol.for('descriptor');
const descriptor2 = Symbol.for('descriptor');
const justSymbol = Symbol('descriptor');
console.log('descriptor1 === descriptor2', descriptor1=== descriptor2);

const key2 = Symbol.keyFor(descriptor2);
console.log('key2', key2);
console.log(descriptor2.description);
console.log(Symbol.keyFor(justSymbol));
console.log(justSymbol.description);



// const range = {
//   from: 11,
//   to: 23,
// };
//
// const favouriteAuthors = {
//   my: {
//     spain: [
//       'Adolf',
//       'Suzanna'
//     ],
//     japan: [
//       'Kirill Alekseev',
//       'October'
//     ],
//   },
//   friends: {
//     england: [
//       'William',
//       'Sebastian'
//     ],
//     german: [
//       'Henry',
//       'Missilse'
//     ],
//   }
// };
//
// const myIterator = (array) => {
//   return {
//     next() {
//
//     }
//   }
// };
//
// function* pseudoRandom(number) {
//   const value = previousValue * 16500 % 2250543;
// }