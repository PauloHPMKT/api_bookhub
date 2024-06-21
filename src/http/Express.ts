import express, { Application, urlencoded, json } from "express";
import cors from "cors";

export class AppExpress {
  private app: Application;

  constructor() {
    this.app = express();
    this.setMiddlewares();
  }

  private setMiddlewares() {
    const middlewares = [
      json(),
      urlencoded({ extended: true }),
      cors(),
    ]
    middlewares.forEach(middleware => {
      this.app.use(middleware);
    });
  }

  public initServer(port: number) {
    this.app.listen(port, () => (
      console.log(`[BOOKHUB_API] - Server is running on http://localhost:${port}`)
    ))
  }
}
