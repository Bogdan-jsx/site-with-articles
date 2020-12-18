const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const controllers = require("./controllers");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./db/models/user").model;

app.use(cors())

mongoose.connect("mongodb://localhost:27017/articles2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: "SECRET" }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    function (username, password, done) {
      User.findOne({ email: username }, function (err, user) {
        return err
          ? done(err)
          : user
          ? password === user.password
            ? done(null, user)
            : done(null, false, { message: "Incorrect Password" })
          : done(null, false, { message: "Incorrect Ussername" });
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    return err ? done(err) : done(null, user);
  });
});

controllers(app);

app.listen(3000);

module.exports = app;