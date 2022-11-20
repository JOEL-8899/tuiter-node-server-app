import express from 'express';
import HelloController from "./controllers/hello-controllers.js";
import UserController from "./controllers/users/users-controller.js";
const app = express()
HelloController(app);
UserController(app);
app.listen(4000)