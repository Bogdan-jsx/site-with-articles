const article = require("../models/article");
const mongoose = require("mongoose");

const articleModel = require("../models/article").model;

async function addArticle(article) {
  const newArticle = articleModel(article);
  return await newArticle.save();
}
async function getArticles() {
  const articles = await articleModel.find();
  articles.reverse()
  return articles;
}
async function getArticlesByTheme(theme) {
  const articles = articleModel.find({ theme });
  return await articles;
}
async function editArticle(id, newInfo) {
  return await articleModel.findByIdAndUpdate(id, newInfo);
}
async function deleteArticle(id) {
  return await articleModel.findByIdAndDelete(id);
}
async function getArticleById(id, userId) {
  const article = await articleModel.aggregate([
    {
      $match: { _id: mongoose.Types.ObjectId(id) } 
    },
    {
      $project: {
        title: 1,
        description: 1,
        content: 1,
        views: 1,
        author: 1,
        theme: 1,
        comments: 1,
        likesCount: { $size: "$likes" },
        dislikesCount: { $size: "$dislikes" },
        isLiked: {$indexOfArray: ["$likes", mongoose.Types.ObjectId(userId)]},
        isDisliked: {$indexOfArray: ["$dislikes", mongoose.Types.ObjectId(userId)]},
    }
  }]);
  return await article[0];
}
async function addCommentToArticle(articleId, comment) {
  return await articleModel.findByIdAndUpdate(articleId, {
    $push: { comments: { $each: [comment], $position: 0 } },
  });
}
async function deleteComment(articleId, commentId) {
  return articleModel.findByIdAndUpdate(articleId, {
    $pull: { comments: commentId },
  });
}
async function editComment(articleId, commentId, newText) {
  await articleModel.updateOne(
    { _id: articleId, "comments._id": commentId },
    { $set: { "comments.$.commentContent": newText } }
  );
  return (await articleModel.findById(articleId)).comments;
}
async function getComments(articleId) {
  const article = await articleModel.findById(articleId);
  return article.comments;
}
async function addCommentAnswer(articleId, commentId, answer) {
  const comments = await getComments(articleId);
  const comment = comments.filter(item => item._id == commentId)[0];
  const answers = [answer, ...comment.answers] 
  return await articleModel.updateOne(
    { _id: articleId, "comments._id": commentId },
    { $set: { "comments.$.answers":  answers } }
  );
}
async function editCommentAnswer(articleId, commentId, answerId, newText) {
  const comments = await getComments(articleId);
  const comment = comments.filter(item => item._id == commentId)[0];
  const answers = comment.answers;
  answers.forEach(item => {
    if (item._id == answerId) {
      item.answerContent = newText;
    }
  });
  return await articleModel.updateOne(
    { _id: articleId, "comments._id": commentId },
    { $set: { "comments.$.answers": answers } }
  );
}
async function addView(articleId) {
  return await articleModel.findByIdAndUpdate(articleId, { $inc: { views: 1 } } );
}
async function getArticlesByTitle(searchRequest) {
  return await articleModel.find({ title: { $regex: new RegExp(searchRequest) } });
}
async function getArticlesByIds(ids) {
  return await articleModel.find({ '_id' : { $in: ids } });
}
async function addLike(articleId, likedUserId) {
  return await articleModel.findByIdAndUpdate(articleId, { $push: { likes: likedUserId } });
}
async function addDislike(articleId, dislikedUserId) {
  return await articleModel.findByIdAndUpdate(articleId, { $push: { dislikes: dislikedUserId } });
}

module.exports = {
  addArticle,
  getArticles,
  getArticlesByTheme,
  editArticle,
  deleteArticle,
  getArticleById,
  addCommentToArticle,
  deleteComment,
  editComment,
  getComments,
  addCommentAnswer,
  editCommentAnswer,
  addView,
  getArticlesByTitle,
  getArticlesByIds,
  addLike,
  addDislike,
};
