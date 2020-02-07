// for(let elem of document.querySelectorAll('*')) {
//   elem.addEventListener("click", e => alert(`Погружение: ${elem.tagName}`), true);
//   elem.addEventListener("click", e => alert(`Всплытие: ${elem.tagName}`));
// }



// preventDefault()
// stopPropagation()

// const handlerStopP = (e) => {
//   console.log(this);
//   const { target } = e;
//   // e.stopPropagation();
//   alert('p click');
//   console.log('target', target)
// };

// const p = document.getElementsByTagName('p')[0];
// p.addEventListener('click', handlerStopP);
// const form = document.getElementsByTagName('form')[0];
// form.addEventListener('click', () => alert('form click'));

// const thisHandler = function (e) {
//   console.log('thisHandler, this: ', this);
//   console.log('e.target', e.target)
//   console.log('e.currentTarget', e.currentTarget)
// }

// form.addEventListener('click', thisHandler);


// for(let elem of document.querySelectorAll('*')) {
//   elem.addEventListener("click", thisHandler);
// }
//////
// const menu = document.querySelector('#menu');

class Menu {
  constructor(elem) {
    // elem.onclick = this.onClick;
    elem.onclick = this.onClick.bind(this); // (*)
  }

  save() {
    alert('сохраняю');
  }

  load() {
    alert('загружаю');
  }

  search() {
    alert('ищу');
  }

  clear() {
    alert('удалил');
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  };
}


// document.addEventListener('click', funct, true)
// document.removeEventListener('click', funct, true)
// new Menu(menu);

// const saveBtn = document.getElementById('save');
// const loadBtn = document.getElementById('load');
// const searchBtn = document.getElementById('search');
//
// saveBtn.addEventListener('click', () => console.log('save'))
// loadBtn.addEventListener('click', () => console.log('load'))
// searchBtn.addEventListener('click', () => console.log('search'))
////////
// document.addEventListener('click', function(event) {
//
//   if (typeof event.target.dataset.counter !== "undefined") { // если есть атрибут...
//     event.target.value++;
//   }
//
// });

const handler = (e) => {
  const { target } = e;
  const next = target.nextElementSibling || {};
  const prev = target.previousElementSibling || {};
  debugger;
  const nextIsArea = next.id === 'area';
  if (nextIsArea) {
    next.hidden = !next.hidden;
    return;
  }
  const prevIsArea = prev.id === 'area';
  if (prevIsArea){
    prev.hidden = !prev.hidden;
  }
};

document.addEventListener('click', handler);











