import tuitsModel from './tuits-model.js';
export const findTuit = () =>{return tuitsModel.find()};
export const createTuit = (tuit) =>{return tuitsModel.create(tuit)};
export const deleteTuit = (tid) =>{return tuitsModel.deleteOne({_id :tid})};
export const updateTuit = (tid, tuit) =>{return tuitsModel.updateOne({_id : tid},{$set : tuit})};