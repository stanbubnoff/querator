export declare class Querator {
  constructor(): void { }
  async connect(): void {}
  async publish(topic: string, message: any): void {}
  async recieve(topic: string, handler: Function): void {}
  async unsubscribe(topic: string): void {}
  async ping(): void {}
}

interface Constructor {
  engine: 'redis' | 'rabiitmq' | 'kafka' | 'zeromq' | 'mqtt'
  configuration: 'manul' | 'json' | 'yaml' | 'toml'
  file?: string
  settings?: any
}