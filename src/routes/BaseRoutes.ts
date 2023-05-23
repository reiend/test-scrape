import express, { IRouter } from "express";

abstract class BaseRoutes {
  public getRouter() {
    return this.router;
  }

  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  protected router: IRouter;
  protected abstract initializeRoutes(): void;
}

export default BaseRoutes;
