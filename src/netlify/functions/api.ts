import serverless from "serverless-http"
import { app } from "../../index"
import { Router } from "express";

// const router = Router();
// router.get("/hello", (req, res) => res.send("Hello World!"));

// app.use("/", router);

export const handler = serverless(app)