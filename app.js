import express from 'express';
import HelloController from "./controllers/hello-controllers.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js"
import cors from 'cors';
const app = express()
app.use(cors());
app.use(express.json());
HelloController(app);
TuitsController(app);
UserController(app);
app.listen(4000)