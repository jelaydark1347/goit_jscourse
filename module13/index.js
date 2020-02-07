// console.log('hi');
//
// function OldBase (wage) {
//   // bla-bla-bla
//   this.wage = wage;
// }
//
// class Base {
//   constructor() {
//
//   }
//   setHeight(newH) {
//     this.height = newH;
//   }
//
//   setLength(newLen) {
//     this.length = newLen;
//   }
//
//   set square ({ len, he }) {
//     // const { len, he } = obj
//     // const len = leobj.len;
//     // const he = obj.he;
//     this.length = len;
//     this.height = he;
//   }
//
//   get square () {
//     return this.length * this.height;
//   }
//
//   // getWage() {
//   //   return this.wageValue;
//   // }
//   //
//   // set wage (newWage) {
//   //   const doubleWage = newWage * newWage;
//   //   // debugger;
//   //   const string = String(doubleWage);
//   //   const arr = string.split('');
//   //   this.wageValue = arr[0];
//   // }
//
//   // get wage () {
//   //   return this.wageValue;
//   // }
// }
//
// // const inst = new Base(178);
// // const inst1 = new Base();
//
// const inst2 = new Base();
// // console.log(inst2.getWage());
// // inst2.setWage(12);
// // console.log(inst2.getWage());
//
// // console.log(inst2.wage);
// // inst2.wage = 12;
// // console.log(inst2.wage);
// // console.log('inst', inst);
// // inst.a();
// // inst1.a();
// //
// // console.log('inst === inst1', inst === inst1)
// //
// // const oldInstance = new OldBase();
// //
// // class ExtendedClass extends Base {
// //
// //   constructor(height) {
// //     super(0);
// //     this.height = height;
// //   }
// //
// //   b() {
// //     console.log('b this', this)
// //   }
// //
// //   static getWindow() {
// //     return window;
// //   }
// //
// //   makeWageLess (count) {
// //     this.wage = this.wage - count;
// //   }
// //
// //   setHeight(newHeight) {
// //     this.height = newHeight
// //   }
// //
// //   getHeight() {
// //     return this.height;
// //   }
// // }
// //
// // const instanceB = new ExtendedClass(12);
// // const instanceA = new ExtendedClass(122);
// // console.log('instanceB', instanceB);
// // console.log('instanceA', instanceA);
// //
// // instanceB.makeWageLess(10)
// // const WAGE = 'wage';
// // console.log(instanceB);
// // console.log(instanceA[WAGE]);
// //
// // const dir = new ExtendedClass(0);
// // dir.setHeight(12);
// // dir.setWage(12);
// // dir.b();
// //
// // // dir.getWindow();
// // console.log('ExtendedClass.getWindow()', ExtendedClass.getWindow())
// //
// // class ExtendedExtended extends ExtendedClass {
// //   constructor() {
// //     super(0);
// //   }
// //
// //   b() {
// //     console.log('window', ExtendedClass.getWindow())
// //   }
// // }
// //
// // const instanceInstanceA = new ExtendedExtended(0);
// // console.log(instanceInstanceA);
//
// // instanceInstanceA.b();
//
// // inst2.square = { len: 12, he: 10 };
// console.log(inst2.square);
// // const tempVariable = inst2.square
// let c = 0;
// const changeThis = (newThis) => ({ currentThis: newThis, counter: c++ });
//
// class User {
//   constructor () {
//     this.password = '';
//     this.changeThis = changeThis.bind(this);
//   }
//
//   setPassword (p) {
//     this.password = p
//   }
// }
//
// const Petya = new User();
//
// Petya.setPassword(11111);
// console.log(Petya);
//
// class TableCreator {
//   constructor(props = {}) {
//     const { maxLength = 150, isUser = false, canSetRole = false } = props;
//     this.maxLength = maxLength;
//     this.isUser = isUser;
//     this.isAdmin = !isUser;
//     this.canSetRole = canSetRole;
//   }
//
//   createInput (parentBlock) {
//     const input = document.createElement('input');
//     parentBlock.appendChild(input);
//   }
// }
//
// class SmallTableCreatorWithAvatar extends TableCreator {
//   createAvatar(parentBlock) {
//     const input = document.createElement('input');
//     input.setAttribute('type', 'image');
//     parentBlock.appendChild(input);
//   }
// }
//
// const profileInfoCreator = new TableCreator({ maxLength: 12 });
// const editUserCreator = new TableCreator({ maxLength: 120, isUser: true });
//
// const rootElement = document.getElementById('root');
//
// profileInfoCreator.createInput(rootElement);


const height = prompt('HEIGHT, PLEASE: ');
const width = prompt('WIDTH, PLEASE: ');

const heightNumber = Number(height);

/**     */
function Code () {
  try {
    if (isNaN(heightNumber) || width == undefined) {
      console.error('ВСЕ СЛОМАЛОСЬ!');
      // throw TypeError('error'); // undefined()
      /** CODE; */
      undefined()
      console.log('ANYTHING');
    } else {
      console.log(width * height)
    }
  } catch (e) {
    console.error(`Hey, duded, U've got an error: ${e}`)
    console.log('откатывыаем изменения')

  }
}
/**    */


Code();
console.log('продолжение');