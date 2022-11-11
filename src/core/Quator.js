export class Quator {
  #CONFIG = null
  #BROKER_SETTINGS = null
  #HANDLERS = null

  #SENDER = null
  #RECEIVER = null

  /**
   * @param {object} options
   * @param {'redis' | 'rabbitmq'} options.type
   * @param {object} options.settings
   * @param {'manual' | 'json' | 'yml'} options.type
   * @param {string} options.filename
   */
  constructor (options) {
    this.#CONFIG = options
  }

  async subscribe (topic) {}

  async send (topic, message) {}

  async receive (topic, handler) {}

  async ping () {}
}
