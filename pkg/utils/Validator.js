import Ajv from "ajv";
import ajvErrors from "ajv-errors";
import { Logger } from "./Logger.js";
class VALIDATOR {
  #VALIDATOR = null;
  constructor() {
    this.#VALIDATOR = new Ajv({ allErrors: true });
    ajvErrors(this.#VALIDATOR);
  }
  check(schema, payload) {
    try {
      const validate = this.#VALIDATOR.compile(schema);
      if (!validate(payload)) {
        Logger.error("Validation error", { error: validate.errors });
        return false;
      } else {
        return validate(payload);
      }
    } catch (error) {
      Logger.error("Failed to validate config", { error });
    }
  }
}
const Validator = new VALIDATOR();
export {
  Validator
};
