const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapasync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const usercontroller = require("../controller/user.js");

router.route("/signup")
.get(usercontroller.getsignup)
.post(wrapAsync(usercontroller.postsignup));

router.route("/login")
.get(usercontroller.getlogin)
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect : "/login",failureFlash : true}),usercontroller.postlogin);

router.get("/logout",usercontroller.logout);
module.exports = router;
