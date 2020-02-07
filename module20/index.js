const func = (n) => {
  console.log('функция #', n)
};
console.log('start');
// setTimeout(func, 1000, 1);
// const timerTimeoutID = setTimeout(func, 1000);
// clearTimeout(timerTimeoutID);
// let i = 0;
// const timerIntervalID = setInterval(func, 1000, i++);
// setTimeout(setTimeout() => clearInterval(timerIntervalID), 3000);

// func(1);
// func(2);
// setTimeout(func, 0, 3);
// func(4);

// let inter = 0;
// const consoleLogInt = () => console.log('interval #', inter++);
// const interval = setInterval(consoleLogInt, 1000);
//
// let timer;
// let timeout = 0;
// const consoleLogTimeOut = () => {
//   console.log('timeout #', timeout++);
//   timer = setTimeout(consoleLogTimeOut, 1000);
// };
//
// timer = setTimeout(consoleLogTimeOut, 1000);

const date = new Date();
console.log('date', date);

const dateParametrized = new Date(2010, 6, 5, 6, 2, 10, 100);

console.log('dateParametrized', dateParametrized);

const dateUnix = new Date(10000000);
console.log('dateUnix', dateUnix);

const ourDateUnix = date.getTime();
console.log('ourDateUnix', ourDateUnix);
console.log(new Date(ourDateUnix));

const oldDate = new Date(ourDateUnix);
const dayOld = oldDate.getDate();
console.log('dayOld', dayOld);
// const weekDay = date.getDay();
// const month = date.getMonth();
// const year = date.getFullYear();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
// const milisecond = date.getMilliseconds();
// console.log({
//   day,
//   weekDay,
//   month,
//   year,
//   hour,
//   minute,
//   second,
//   milisecond,
// });

// console.log(new Date(20046, 3));
const current = new Date();
// console.log('now is ', current.getDay(), 'day of the week');
// current.setFullYear(current.getFullYear()+1);
// console.log('in one year will b ', current.getDay(), 'day of the week');
// console.log('in UNIX:', current.getTime());

console.log(current.toLocaleString(''));