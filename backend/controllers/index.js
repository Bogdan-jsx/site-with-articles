const articlesController = require("./articlesController");
const userController = require("./userController");
const commentController = require("./commentsController");

module.exports = function (app) {
    app.use("/articles", articlesController());
    app.use("/user", userController());
    app.use("/comment", commentController());
}