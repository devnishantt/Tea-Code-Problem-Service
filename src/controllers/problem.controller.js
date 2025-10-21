import { StatusCodes } from "http-status-codes";

export function pingProblemController(req, res) {
  res.status(200).json({ message: "Problem controller is live!" });
}

export function addProblem(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}

export function getProblem(req, res, next) {
  try {
    throw new NotImplemented("getProblem");
  } catch (error) {
    next(error);
  }
}

export function getProblems(req, res, next) {
  try {
    throw new NotImplemented("getProblems");
  } catch (error) {
    next(error);
  }
}

export function deleteProblem(req, res, next) {
  try {
    throw new NotImplemented("deleteProblem");
  } catch (error) {
    next(error);
  }
}

export function updateProblem(req, res, next) {
  try {
    throw new NotImplemented("updateProblem");
  } catch (error) {
    next(error);
  }
}
