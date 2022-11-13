import { Querator } from './src/core/Querator.js'

const main = async () => {
  const broker = new Querator({
    type: 'rabbitmq',
    configuration: 'manual',
    settings: {
      hostname: '0.0.0.0',
      username: 'guest',
      password: 'guest'
    }
  })

  await broker.connect()

  await broker.receive('test', (msg) => {
    console.log(msg)
  })

  await broker.receive('test2', (msg) => {
    console.log(msg)
  })

  setInterval(async () => {
    await broker.publish('test', 'test')
    await broker.publish('test2', 'test2')
  }, 2000)
}

main()
