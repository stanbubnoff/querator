const queratorConstructorSchema = {
  type: "object",
  properties: {
    engine: {
      type: "string",
      enum: ["redis", "rabbitmq", "mqtt", "kafka"],
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
  required: ["engine"],
  additionalProperties: false
};
export {
  queratorConstructorSchema
};
