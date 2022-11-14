const queratorConstructorSchema = {
  type: "object",
  properties: {
    engine: {
      type: "string",
      enum: ["redis", "rabbitmq", "mqtt", "kafka"],
      nullable: false
    },
    configuration: {
      type: "string",
      enum: ["manual", "json", "yaml", "toml"],
      nullable: false
    },
    file: {
      type: "string",
      nullable: false
    },
    settings: {
      type: "object",
      nullable: true
    }
  },
  required: ["engine", "configuration"],
  additionalProperties: false
};
export {
  queratorConstructorSchema
};
