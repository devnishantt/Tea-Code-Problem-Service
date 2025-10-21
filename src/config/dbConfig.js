import mongoose from "mongoose";
import { ATLAS_DB_URL, NODE_ENV } from "./server.config.js";

export default async function connectDB() {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(ATLAS_DB_URL);
    }
  } catch (error) {
    console.log(`Unable to connect to DB ${error}`);
  }
}
