const st = 'test';
const stringIterator = st[Symbol.iterator]();

console.log(stringIterator.next());
console.log(stringIterator.next().value);
console.log(stringIterator.next().value);
console.log(stringIterator.next());
console.log(stringIterator.next());


Number.prototype[Symbol.iterator] = function () {
  return {
    current: 0,
    last: this,
    next() {
      return {
        value: this.current++,
        done: this.current > this.last,
      }
    }
  }
};

const a = 5;

for (let i of 5) {
  console.log(i)
}

function* generatorF() {
  const result = yield '2 + 2 ?';
  yield 12;
  console.log(result);
};

// const g = generatorF();
// console.log(g.next().value);
// console.log(g.next(4));
// g.next();

function* genText() {
  // const text = yield;
  while (true) console.log(yield);
  // const text2 = yield;
  // console.log(yield);
}

const g = genText();
g.next();
g.next('test');
g.next('ama');



