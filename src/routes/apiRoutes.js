import { Router } from "express";
import v1Router from "./v1Routes/v1Routes.js";

const apiRouter = Router();

//if any request comes and route continues with /v1, map it to v1Router
apiRouter.use("/v1", v1Router);

export default apiRouter;
