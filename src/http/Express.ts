import express, { Application, urlencoded } from "express";

export class AppExpress {
  private app: Application;

  constructor() {
    this.app = express();
    this.setMiddlewares();
  }

  private setMiddlewares() {
    this.app.use(express.json());
    this.app.use(urlencoded({ extended: true }));
  }

  public initServer(port: number) {
    this.app.listen(port, () => (
      console.log(`[BOOKHUB_API] - Server is running on http://localhost:${port}`)
    ))
  }
}
