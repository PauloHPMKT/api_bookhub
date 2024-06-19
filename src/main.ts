import { AppExpress } from "./http/Express";

const port = 3000;

const app = new AppExpress();
app.initServer(port);