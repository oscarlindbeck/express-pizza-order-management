import express from "express";
import connectDatabase from "./config/database.js";
import routes from "./routes/_index.js";

const connection = await connectDatabase();

connection.on("error", (error) => {
  console.error("Connection exception", error);
});

connection.once("open", () => {
  console.log("Database connection successful");
});

const app = express();

routes(app);

export default app;