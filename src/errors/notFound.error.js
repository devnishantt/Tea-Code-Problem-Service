import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error.js";

export default class NotFound extends BaseError {
  constructor(resourceName, resourceValue) {
    super(
      "NotFound",
      StatusCodes.NOT_FOUND,
      `The requested resource ${resourceName} with resource value ${resourceValue} not found!`,
      { resourceName, resourceValue }
    );
  }
}
