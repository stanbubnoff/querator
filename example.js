import { Querator } from './pkg/core/Querator.js'

const main = async () => {
  const broker = new Querator({
    engine: 'rabbitmq',
    file: './config/rabbit_config.yaml'
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
  }, 1000)
}

main()
