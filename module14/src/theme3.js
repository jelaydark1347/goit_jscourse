const THEME_DICT = {
  WHITE: 1,
  GREEN: 0,
};
let theme = localStorage.getItem('theme') || THEME_DICT.WHITE;

const rerender = () => {
  const body = document.body;
  body.classList.remove('dark');
  body.classList.remove('light');
  body.classList.add(theme === THEME_DICT.WHITE ? 'light' : 'dark');
};

rerender();

const btnChange = document.getElementById('theme');
btnChange.addEventListener('click', () => {
  theme = theme === THEME_DICT.GREEN
    ? THEME_DICT.WHITE
    : THEME_DICT.GREEN;
  localStorage.setItem('theme', theme);
  rerender()
  }
);

// const data = {
//   header: "ADDRESS BOOK OF EUGENIY",
//   people: [
//     {
//       name: "Eugeniy Tulyakov",
//       phone: "+38 095 44 666 29",
//     },
//     {
//       name: "Hmelnychuk Mikhaylo",
//       phone: "093 959 10 70",
//     },
//     {
//       name: "testAccount",
//       phone: "+38095 000 00 00",
//     }
//   ],
// };
//
// localStorage.setItem('data', JSON.stringify(data));