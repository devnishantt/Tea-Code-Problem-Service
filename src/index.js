import express from "express";
import { PORT } from "./config/server.config.js";
import apiRouter from "./routes/apiRoutes.js";
import errorHandler from "./utils/errorHandler.js";
import connectDB from "./config/dbConfig.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.get("/ping", (req, res) => {
  res.json({ message: "Problem service is alive!..." });
});

//if any request comes and route starts with /api, map it to apiRouter
app.use("/api", apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server is listening on PORT: ${PORT}`);
  await connectDB();
  console.log("Successfully connected to DB");
});
