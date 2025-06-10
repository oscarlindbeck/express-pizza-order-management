import express from "express";
import connectDatabase from "./config/database.js";
import routes from "./routes/_index.js";
import swaggerSpec from "./config/swagger.js";
import swaggerUi from 'swagger-ui-express';

const connection = await connectDatabase();

connection.on("error", (error) => {
  console.error("Connection exception", error);
});

connection.once("open", () => {
  console.log("Database connection successful");
});

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

routes(app);

export default app;