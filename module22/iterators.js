const iterableObject = {
  from: 1,
  to: 12,
  getAllValues() {
    const result = [];
    for(let i = this.from; i < this.to; i++) {
      result.push(i);
    }
    return result;
  },
  [Symbol.iterator]() {
    return {
      current: this.from,
      end: this.to,
      next() {
        return {
          value: this.current++,
          done: this.current > this.end,
        }
      }
    }
  }
};

const myArrayFromObject = [...iterableObject];
console.log('myArrayFromObject', myArrayFromObject);


const values1 = iterableObject.getAllValues();
console.log('values1', values1);

const iterator = (array) => {
  return {
    i: 0,
    next() {
      const value = array[this.i];
      const done = this.i === array.length;
      this.i++;
      return { value, done } // done: false/true
    }
  }
};

const instance = iterator([1, 2, 3]);

console.log(instance.next());
console.log(instance.next());
console.log(instance.next());
console.log(instance.next());

const array = [ 1, 2, 3];
const string = 'Hello';

console.log('[ ...string ]', [ ...string ]);

const strIterator = string[Symbol.iterator]();

console.log('strIterator', strIterator);

console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());