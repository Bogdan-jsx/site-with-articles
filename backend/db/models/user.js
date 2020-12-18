const mongoose = require("mongoose");
const {Schema} = mongoose;
const schema = new Schema({
    avatar: {
        type: Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    articles: {
        type: [Schema.Types.ObjectId],
    },
    isAdmin: {
        type: Boolean,
        required: true,
    }
})
module.exports = {
    model: mongoose.model("users", schema),
    schema,
}