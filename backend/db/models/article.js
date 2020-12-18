const mongoose = require("mongoose");
const {Schema} = mongoose;
const comments = require("./comment").schema;
const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    likes: {
        type: [Schema.Types.ObjectId],
    },
    dislikes: {
        type: [Schema.Types.ObjectId],
    },
    views: {
        type: Number,
        required: true,
    },
    comments: {
        type: [comments],
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    theme: {
        type: String,
        required: true,
    },
});
module.exports = {
    model: mongoose.model("articles", articleSchema),
    schema: articleSchema,
}