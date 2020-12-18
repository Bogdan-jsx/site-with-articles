const userModel = require("../models/user").model;

async function addUser(user) {
    const newUser = userModel(user);
    return await newUser.save();
}
async function editUser(userId, newInfo) {
    return await userModel.findByIdAndUpdate(userId, newInfo);
}
async function deleteUser(userId) {
    return await userModel.findByIdAndDelete(userId);
}
async function getUserByEmail(email) {
    return await userModel.findOne({email})
}
async function addArticleToUser(userId, articleId) {
    return await userModel.findByIdAndUpdate(userId, {$push: {articles: articleId}}) 
}
async function getUserById(id) {
    return await userModel.findById(id);
}

module.exports = {
    addUser,
    editUser,
    deleteUser,
    addArticleToUser,
    getUserById,
    getUserByEmail,
}