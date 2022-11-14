> ---
> # ATTENTION!
> 
> The library is under development. For reference only.  
> The NPM package has all the latest changes, you can check the functionality in the current state.
>
> We also ask everyone who considers this project interesting and promising to put star on github! Also, you can help raise awareness of this library and share it on social media so that more people know about it. Thank you!
>    
> WELCOME TO CONTRIBUTORS!

<p align="center">
  <img src="./docs/img/querator_primary.png" />
</p>

## Universal NodeJS wrapper for working with RabbitMQ, Redis pub/sub, Kafka and other message queues.

- [Motivation](#motivation)  
- [How it works](#how-it-works) 
- [Usage](#usage)
- [Engines](#engines) 
- [Roadmap](#roadmap)  
- [Contributing](#contributing)  

---
## Motivation
---
Distributed systems are already practically the standard for modern application development. Message queues are a key link in such systems. At the same time, there are a lot of technologies that implement message queues, and choosing the right technology is a rather difficult task, and switching to another technology during the life cycle of an application brings with it a lot of overhead.

Querator implements a universal API for various message brokers such as RabbitMQ, Redis pub /sub, Kafka, ZeroMQ, MQTT and others.

---
## Engines
---
- RabbitMQ <- amqplib
- Redis <- redis
- Kafka <- kafkajs (not ported yet). HELP WANTED
- MQTT <- MQTT.js (not ported yet). HELP WANTED
- ZeroMQ <- zeromqjs (not ported yet). HELP WANTED

### Run engine for testing

#### RabbitMQ
``` properties
$ docker run -d --hostname my-rabbit --name some-rabbit rabbitmq:3-management
```
[More info](https://hub.docker.com/_/rabbitmq)
#### Redis
``` properties
$ docker run --name some-redis -d redis redis-server
```
[More info](https://hub.docker.com/_/redis)

---
## How it works
---
In addition to certain patterns, all message queues follow the Publisher/Subscriber pattern. Querator hides the specific logic and methods of popular message queuing libraries and provides a single interface that makes it very easy to replace a previously chosen engine with another one.

Querator uses dynamic imports so you can be sure that only the selected engine is loaded.

For ease of use, we have added the ability to load the message broker configuration from a file of any of the popular formats: json, yaml, toml.

---
## Usage
---
### install
``` properties
npm install querator
```
or
``` properties
yarn add querator
```
### Manual settings
``` javascript
import { Querator } from 'querator'

const main = async () => {
  const broker = new Querator({
    engine: 'redis',
    configuration: 'manual',
    settings: {} // settings from engine library docs or empty for default settings
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
```
### Parse settings from file
``` javascript
import { Querator } from 'querator'

const main = async () => {
  const broker = new Querator({
    engine: 'rabbitmq',
    configuration: 'json', // or yaml, or toml
    file: './config/rabbit_config.json' // or .yaml, or .toml
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
```

---
## Roadmap
---
### For v1 release
- add cluster settings
- add specific methods for some engines
- add schemas to validate engines settings
- add ping method
- add docs
- 90%+ test coverege
---
## Contributing
---

This library is fully supported by the community. If you can offer any help, then welcome to the team!

Please use StandardJS for code formatting and linting.
