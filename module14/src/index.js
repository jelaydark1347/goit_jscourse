console.log('hello');
const data = {
  header: "ADDRESS BOOK OF EUGENIY",
  people: [
    {
      name: "Eugeniy Tulyakov",
      phone: "+38 095 44 666 29",
    },
    {
      name: "Hmelnychuk Mikhaylo",
      phone: "093 959 10 70",
    },
    {
      name: "testAccount",
      phone: "+38095 000 00 00",
    }
  ],
};

const template = document
  .getElementById('templateAddressBook')
  .innerHTML
  .trim();

const container = document
  .getElementById('main');

const source = Handlebars.compile(template);

const app = source(data);

container.innerHTML = app;

const call = (name, phone) =>
  console.log(`calling ${name}, on ${phone}... Trrrrn!`);
