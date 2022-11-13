export const queratorConstructorSchema = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['redis', 'rabbitmq', 'mqtt', 'kafka'],
      nullable: false
    },
    configuration: {
      type: 'string',
      enum: ['manual', 'json', 'yaml', 'toml'],
      nullable: false
    },
    filename: {
      type: 'string',
      nullable: false
    },
    settings: {
      type: 'object',
      nullable: true
    }
  },
  required: ['type', 'configuration'],
  additionalProperties: false
}
