const mongoose = require("mongoose");
const {Schema} = mongoose;
const commentAnswers = require("./commentAnswers").schema;
const schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    commentContent: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
    dislikes: {

        type: Number,
        required: true,
    },
    answers: {
        type: [commentAnswers],
    }
})
module.exports = {
    model: mongoose.model("comments", schema),
    schema,
}