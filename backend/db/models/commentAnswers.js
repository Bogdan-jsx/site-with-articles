const mongoose = require("mongoose");
const {Schema} = mongoose;
const schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    answerContent: {
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
})
module.exports = {
    model: mongoose.model("commentAnswers", schema),
    schema,
}