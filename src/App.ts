import express, { Express } from "express";
import { Route } from "./constants";
import Routes from "./routes";

class App {
  public connectDb() {
    return this;
  }

  public startServer() {
    this.app.listen(this.port, () => {
      console.log(`listening on port ${this.port}`);
    });

    return this;
  }

  constructor(param) {
    this.app = express();
    this.port = param?.port || 3000;
    this.route = new Routes();
    this.initializeRoutes();
  }

  private app: Express;
  private route;
  private port: number;

  private initializeRoutes = () => {
    const routes = this.route.getRoutes();

    this.app.get("/", routes.get(Route.General));
  };
}

export default App;
