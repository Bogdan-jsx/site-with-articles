const express = require("express");
const articlesRepository = require("../db/repositories/articleRepository");
const userRepository = require("../db/repositories/userRepository");

module.exports = function controller() {
    const router = express.Router();
    router.get("/", async (req, res) => {
        const articles = await articlesRepository.getArticles();
        res.json(articles);
    })
    router.get("/theme/:theme", async (req, res) => {
        const theme = req.params.theme;
        let articles;
        if (theme === "all") {
            articles = await articlesRepository.getArticles();
        } else {
            articles = await articlesRepository.getArticlesByTheme(theme);
        }
        res.send(articles);
    })
    router.get("/article", async (req, res) => {
        const {id, userId} = req.query;
        const article = await articlesRepository.getArticleById(id, userId);
        await articlesRepository.addView(id);
        res.send(article);
    })
    router.post("/addArticle", async (req, res) => {
        const {title, description, content, theme, userId} = req.body;
        const article = {title, description, content, likes: [], dislikes: [], views: 0, author: userId, theme};
        const newArticle = await articlesRepository.addArticle(article);
        await userRepository.addArticleToUser(userId, newArticle._id);
        res.sendStatus(200);
    })
    router.post("/edit", async (req, res) => {
        const {title, description, content, theme, articleId} = req.body;
        await articlesRepository.editArticle(articleId, {title, description, content, theme});
        res.status(200).send();
    })
    router.post("/delete/:id", async (req, res) => {
        const articleId = req.params.id;
        await articlesRepository.deleteArticle(articleId);
        res.status(200).send();
    })
    router.get("/search", async (req, res) => {
        const { searchRequest } = req.query;
        const result = await articlesRepository.getArticlesByTitle(searchRequest);
        res.json(result);
    })
    router.get("/getArticlesByIds", async (req, res) => {
        const { ids } = req.query;
        if (!ids) {
            res.json([]);
        } else {
            const result = await articlesRepository.getArticlesByIds(ids);
            res.json(result);
        }
    })
    router.post("/addLike", async (req, res) => {
        const { articleId, likedUserId } = req.body;
        await articleRepository.addLike(articleId, likedUserId);
        const updatedArticle = await articleRepository.getArticleById(articleId);
        res.json(updatedArticle);
    })
    router.post("/addDislike", async (req, res) => {
        const { articleId, dislikedUserId } = req.body;
        await articleRepository.addDislike(articleId, dislikedUserId);
        const updatedArticle = await articleRepository.getArticleById(articleId);
        res.json(updatedArticle);
    })

    return router;
}