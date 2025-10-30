import { StatusCodes } from "http-status-codes";
import ProblemService from "../services/problem.service";
import ProblemRepository from "../repositories/problem.repository";

const problemService = new ProblemService(new ProblemRepository())

export function pingProblemController(req, res) {
  res.status(200).json({ message: "Problem controller is live!" });
}

export async function addProblem(req, res, next) {
  try {
    const newproblem = await problemService.createProblem(req.body);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem!",
      error: {},
      data: newproblem,
    });
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
