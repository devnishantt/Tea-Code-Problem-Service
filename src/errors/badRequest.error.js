import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error.js";

export default class BadRequest extends BaseError {
  constructor(propertyName, details) {
    super(
      "BadRequest",
      StatusCodes.BAD_REQUEST,
      `Invalid structure for ${propertyName} provided!`,
      details
    );
  }
}
