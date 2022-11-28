import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    disliked :Boolean,
    image : String,
    replies :Number,
    retuits : Number,
    repost :Number,
    handle :String,
    dislikes :Number,
}, {collection: 'tuits'});
export default schema;

