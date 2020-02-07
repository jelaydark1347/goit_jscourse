const animateString = (str, cb) => {
  let a = '';
  let i = 0;
  const p = document.createElement('p');
  document.body.append(p);
  document.body.scrollTop = document.body.offsetHeight;
  return new Promise((resolve) => {
    function animateLetter() {
      a += str[i];
      i++;
      p.textContent = a;
      const timer = setTimeout(animateLetter, 150);
      if (i===str.length) {
        clearTimeout(timer);
        resolve()
      }
    }

    animateLetter();
  })
};

animateString('Hello, i am animated')
  .then(() => animateString('now i am gonna be animated'))
  .then(() => animateString('now i am gonna be animated'))
  .then(() => animateString('now i am gonna be animated'))
  .then(() => animateString('now i am gonna be animated'));

// animateString('111111111111111',
//   () => animateString('111111111111222',
//     () => animateString('221111111111112',
//       () => animateString('211111111122',
//         () => animateString('211111111122')
//       )
//     )
//   )
// )

const longFunction = (data, time) => () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
};


// longFunction()
//   .then(
//     (value) => console.log('operation with value', value), // if resolved
//     // (error) => console.error('promise rejected:', error.message, ', with code: ', error.type,) // if
//   )
//   .catch(e => {
//     console.log(e, ' is catched by catch')
//   })
//   .finally(() => {
//
//   })
// ;
const userInfo = {
  id: 100,
  name: 'Yulia kovalenko',
};

const contryList = [
  'Japan', 'Ukraine', 'Russia', 'Azeibardzan'
];

const bankData = {
  cardNumber: 5018232354324567,
  cvv: 328,
  holder: 'father',
  moneyTracker: 580,
};

const getUserInfo = longFunction(userInfo, 1000);
const getCountryList = longFunction(contryList, 200);
const getCardData = longFunction(bankData, 45);

// getUserInfo()
//   .then(({id}) => getCountryList(id))
//   .then((countryList) => {
//     getCardData()
//   })
//   .then((countryList) => console.log());

Promise.race([ getUserInfo(), Promise.reject(), getCardData() ])
  .then((answers) => {
    // answers.forEach((answer, i) => console.log('data # ', i, ': ', answer ))
    console.log('data # race', ': ', answers )
  });

Promise.resolve();






// animateString('111')
//   .then(() => animateString('222'))
//   .then(() => animateString('222'))
//   .then(() => animateString('222'))
//   .then(() => animateString('222'))