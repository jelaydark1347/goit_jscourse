class PubSub {
  constructor() {
    this.subscribers = {};
  }

  on(event, fn) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = []; //[() => alert('tiptiptip')]
    }
    this.subscribers[event].push(fn);
    /* this.subscribers = {
        'pen click': [
            () => alert('tiptiptip'),
            () => alert('spasibo')
         ]
    } */
  }

  emit(event, ...data) {
    if (this.subscribers[event] && this.subscribers[event].length) {
      this.subscribers[event].forEach((fn) => fn(...data))
    } else {
      return false
    }
  }

}
const pubsub = new PubSub();

class Order {
  constructor(name, channel) {
    this.order = name;
    this.channel = channel;
  }

  save () {
    console.log('order', this.order, 'is saved');
    this.emitUserEmail();
  }

  emitUserEmail() {
    this.channel.emit('order is saved', this.order);
    // const mail = new Mail();
    // const pack = new Pack();
    // mail.sendLetter(this.order);
    // pack.collect(this.order);
  }
}

class Mail {
  constructor(channel) {
    channel.on('order is saved', this.sendLetter);
  }

  sendLetter(nameOrder) {
    console.log('message about ', nameOrder, 'is sent');
  }
}

class Pack {
  constructor(channel) {
    channel.on('order is saved', this.collect);
  }

  collect(nameOrder) {
    console.log(nameOrder, ' is in his pack');
  }
}

const order = new Order('one apple', pubsub);
const mail = new Mail();
const pack = new Pack();

order.save();

// const dispatcher = new PubSub();

// dispatcher.on('1 plane', land('plane1'));
// pubsub.on('pen click', () => alert('spasibo'));