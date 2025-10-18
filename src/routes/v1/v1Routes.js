import { Router } from "express";
import problemRouter from "./problem.routes.js";

const v1Router = Router();

//if any request comes and route continues with /problem, map it to problemRouter
v1Router.use("/problem", problemRouter);

export default v1Router;
