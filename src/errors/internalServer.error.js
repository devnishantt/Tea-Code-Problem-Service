import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error.js";

export default class InternalServerError extends BaseError {
  constructor(details) {
    super(
      "InternalServerError",
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Something went wrong!`,
      details
    );
  }
}
