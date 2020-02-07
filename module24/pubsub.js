const order = new Order({userEmail: 'john@gmail.com'});
order.save()

class Order {
  constructor (params) {
    this.params = params
  }

  save () {
    console.log('Order saved')
    this.sendEmail(this.params)
  }

  sendEmail () {
    const mailer = new Mailer()
    mailer.sendPurchaseEmail(this.params)
  }
}

class Mailer {
  sendPurchaseEmail (params) {
    console.log(`Email send to ${params.userEmail}`)
  }
}

///////
EventBus.subscribe('foo', () => console.log('foo fired'))
EventBus.publish('foo', 'Hello world')

const EventBus = {
  channels: {},
  subscribe (channelName, listener) {
    if (!this.channels[channelName]) {
      this.channels[channelName] = []
    }
    this.channels[channelName].push(listener)
  },

  publish (channelName, data) {
    const channel = this.channels[channelName]
    if (!channel || !channel.length) {
      return
    }

    channel.forEach(listener => listener(data))
  }
};



///

class NewOrder {
  constructor (params) {
    this.params = params
  }

  save () {
    console.log('Order saved')
    EventBus.publish('order/new', {
      userEmail: this.params.userEmail
    })
  }
}

class NewMailer {
  constructor () {
    EventBus.subscribe('order/new', this.sendPurchaseEmail)
  }

  sendPurchaseEmail (params) {
    console.log(`Email send to ${params.userEmail}`)
  }
}

const mailer = new NewMailer()
const neworder = new NewOrder({userEmail: 'john@gmail.com'})
neworder.save()
