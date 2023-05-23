import { IRouter } from "express";
import { Route } from "../constants";
import GeneralRoutes from "./GeneralRoutes";

class Routes {
  private routes: Map<string, IRouter>;

  constructor() {
    this.routes = new Map();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.routes.set(Route.General, new GeneralRoutes().getRouter());
  }

  public getRoutes() {
    return this.routes;
  }
}

export default Routes;
