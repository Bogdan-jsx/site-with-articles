const express = require("express");
const article = require("../db/models/article");
const comment = require("../db/models/comment");
const articlesRepository = require("../db/repositories/articleRepository");

module.exports = function controller() {
    const router = express.Router();
    
    router.post("/post", async (req, res) => {
        const {commentContent, articleId, userId} = req.body;
        await articlesRepository.addCommentToArticle(
            articleId, 
            {userId, 
            commentContent, 
            likes: 0, 
            dislikes: 0});
        res.sendStatus(200);
    })
    router.post("/delete", async (req, res) => {
        const {articleId, commentId} = req.body;
        await articlesRepository.deleteComment(articleId, commentId);
        res.status(200).send();
    })
    router.post("/edit", async (req, res) => {
        const {articleId, commentId, newText} = req.body;
        const newComments = await articlesRepository.editComment(articleId, commentId, newText);
        res.json(newComments);
    })
    router.get("/getComments", async (req, res) => {
        const  articleId  = req.query.articleId;
        const comments = await articlesRepository.getComments(articleId);
        res.json(comments);
    })
    router.post("/addCommentAnswer", async (req, res) => {
        const { articleId, commentId, answerText, userId } = req.body;
        await articlesRepository.addCommentAnswer(articleId, commentId, 
            {userId, likes: 0, dislikes: 0, answerContent: answerText});
        res.sendStatus(200);
    })
    router.post("/editCommentAnswer", async (req, res) => {
        const {articleId, commentId, answerId, newText} = req.body;
        await articlesRepository.editCommentAnswer(articleId, commentId, answerId, newText);
        res.sendStatus(200);
    })

    return router;
}