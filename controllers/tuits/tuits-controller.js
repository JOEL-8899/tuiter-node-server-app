// import posts from "./tuits.js";
import * as tuitsDao from './tuits-dao.js';
// let tuits = posts;

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.image = "https://tinyurl.com/mtbcfddy";
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.repost=0;
    newTuit.handle = "@newTuit";
    newTuit.dislikes = 0;

    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}
const findTuits  = async (req, res) => {
    const tuit = await tuitsDao.findTuit();
    res.json(tuit);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,updates);

    res.json(status);

}
const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.
    deleteTuit(tuitdIdToDelete);
    res.json(status);

}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


