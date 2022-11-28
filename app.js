import express from 'express';
import HelloController from "./controllers/hello-controllers.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js"
import cors from 'cors';
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter';
mongoose.connect('mongodb+srv://mathewpaulj:Mongo12345@cluster0.r4zsa6f.mongodb.net/?retryWrites=true&w=majority');
const app = express()
app.use(cors());
app.use(express.json());
HelloController(app);
TuitsController(app);

UserController(app);
app.listen(process.env.PORT || 4000);

