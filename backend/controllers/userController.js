const express = require("express");
const userRepository = require("../db/repositories/userRepository")
const passport = require("passport");
const user = require("../db/models/user");

module.exports = function controller() {
    const router = express.Router();

    router.post("/register", async (req, res) => {
        const {name, email, password} = req.body;
        await userRepository.addUser({name, email, password, isAdmin: false});
        res.redirect("http://localhost:3001/logIn");
    })
    router.post("/logIn", passport.authenticate("local"), async (req, res) => {
        const { email } = req.body;
        console.log(email);
        const user = await userRepository.getUserByEmail(email);
        console.log(user);
        res.json(user);
    })
    router.get("/logout", (req, res) => {
        req.logOut();
        res.redirect("/");
    })
    router.get("/isLogedIn", (req, res) => {
        if (req.user) {
            res.send(true);
        } else {
            res.send(false);
        }
    })
    router.get("/getUserName/:id", async (req, res) => {
        const userId = req.params.id;
        const user = await userRepository.getUserById(userId);
        const userName = user.name;
        res.send(userName);
    })

    return router;
}