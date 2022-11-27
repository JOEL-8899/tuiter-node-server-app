import mongoose from "mongoose";
import schema from "./tuits-schema.js";

const model = mongoose.model('TuitModel',schema);
export default model;