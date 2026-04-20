const express = require("express");
const router = express.Router({mergeParams:true});
const wrapasync = require("../utils/wrapasync.js");
const {validateReview,isloggedIn} = require("../middleware.js");
const reviewcontroller = require("../controller/review.js");



router.post("/",isloggedIn,validateReview,wrapasync(reviewcontroller.createReview));
//delete review route
router.delete("/:reviewId",wrapasync(reviewcontroller.destroy));

module.exports = router;