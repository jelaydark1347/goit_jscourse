const validator = require('validator');

const valid_email = 'email@gmail.com';
const invalid = 'invalid.email';

console.log(`${valid_email} is valid EMAIL: ${validator.isEmail(valid_email)}`);
console.log(`${invalid} is valid EMAIL: ${validator.isEmail(invalid)}`);



const line = 'hello world from NodeJS';

const func = (a) => {
  console.log(a);
};

func(line);

