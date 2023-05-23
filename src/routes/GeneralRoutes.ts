import BaseRoutes from "./BaseRoutes";

class GeneralRoutes extends BaseRoutes {
  public getHome() {
    this.router.get("/", (req, res) => {
      res.send("general");
    });
  }

  protected initializeRoutes() {
    this.getHome();
  }
}

export default GeneralRoutes;
