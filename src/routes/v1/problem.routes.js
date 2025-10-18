import { Router } from "express";
import { problemController } from "../../controllers/index.js";

const problemRouter = Router();

problemRouter.get("/ping", problemController.pingProblemController);
problemRouter.post("/add", problemController.addProblem);
problemRouter.get("/:id", problemController.getProblem);
problemRouter.get("/", problemController.getProblems);
problemRouter.delete("/:id", problemController.deleteProblem);
problemRouter.put("/:id", problemController.updateProblem);

export default problemRouter;
