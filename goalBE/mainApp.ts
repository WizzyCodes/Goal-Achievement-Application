import { Application, Request, Response } from "express";
import path from "./router/router";

export const mainApp = (app: Application) => {
  try {
    app.use("/api", path);

    app.get("/", (req: Request, res: Response) => {
      res.status(200).json({ message: "Hello, CodeLab!", status: 200 });
    });
  } catch (error) {
    return error;
  }
};
