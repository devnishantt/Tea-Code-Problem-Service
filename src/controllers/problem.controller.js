import { StatusCodes } from "http-status-codes";

export function pingProblemController(req, res) {
  res.status(200).json({ message: "Problem controller is live!" });
}

export function addProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "NOT IMPLEMENTED" });
}

export function getProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "NOT IMPLEMENTED" });
}

export function getProblems(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "NOT IMPLEMENTED" });
}

export function deleteProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "NOT IMPLEMENTED" });
}

export function updateProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "NOT IMPLEMENTED" });
}
