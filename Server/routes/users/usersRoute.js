const express = require("express");
const {
  registerUserCtrl,
  userLoginCtrl,
  userProfileCtrl,
} = require("../../controllers/users/usersCtrl");
const isLogin = require("../../middlewares/isLogin");
const usersRoute = express.Router();

// post/api/v1/users/register

usersRoute.post("/register", registerUserCtrl);

// post/api/v1/users/login

usersRoute.post("/login", userLoginCtrl);

usersRoute.get("/profile", isLogin, userProfileCtrl);
module.exports = usersRoute;
