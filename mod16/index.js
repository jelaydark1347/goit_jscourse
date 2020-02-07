// const scrollHandler = (e) => {
//   console.log('scroll handled', e);
// };
//
// // const throttledScrollHandler = _.throttle(scrollHandler, 1000)
//
// // window.addEventListener('scroll', throttledScrollHandler);
//
// const dictionary = [
//   'aaaaaaa1',
//   'aaaaaaa2',
//   'aaaaaaa3',
//   'aaaaaaa4',
//   'aaaaaaa5',
//   'aaaaaaa6',
//   'aaaaaaa7',
//   'b21',
//   'b22',
//   'b23',
//   'b24',
//   'b25',
//   'b26',
//   'b28',
// ];
//
// const input = document.getElementById('search');
//
// const searchHandler = (e) => {
//   const { target } = e;
//   console.log('target', target);
//   const { value } = target;
//   console.log('value', value);
//   // API call
//   const result = dictionary.filter((item) => item.includes(value));
//   console.log('result', result)
// };
//
// // const debouncedSearchHandler = _.debounce(searchHandler, 1000);
//
// // input.addEventListener('input', debouncedSearchHandler);
//
//
// //throttle Вызов функции раз в t
//
// let lastCall;
//
// const throttle = (funct, t) => (...args) => {
//   const nowCall = Date.now();
//   if (!lastCall) {
//     lastCall = nowCall;
//     funct(...args);
//     return
//   }
//   if (nowCall - lastCall > t) {
//     funct(...args);
//     lastCall = nowCall;
//   }
// };
//
// //debounce Execute через t после последнего вызова
// let timeout;
// const debounce = (funct, t) => (...args) => {
//   clearTimeout(timeout);
//   timeout = setTimeout(() => funct(...args), t)
// };
//
// const throttledScrollHandler = throttle(scrollHandler, 1000)
// const debouncedSearchHandler = debounce(searchHandler, 1000);
//
// window.addEventListener('scroll', throttledScrollHandler);
// input.addEventListener('input', debouncedSearchHandler);
/** INTERSECTION OBSERVER */

const onEntry = (entries, observer) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      const realSrc = target.dataset.src;
      console.log('observed');
      target.setAttribute('src', realSrc);
      observer.unobserve(target);
    }
  })
};

const observer = new IntersectionObserver(onEntry);
const imageCollection = document.getElementsByTagName('img');

[ ...imageCollection ].forEach(img => observer.observe(img));




