const express = require("express");
const router = express.Router();
const wrapasync = require("../utils/wrapasync.js");
const {isloggedIn,isOwner,validateListing} = require("../middleware.js");
const {storage} = require("../cloudconfig");
const multer = require("multer");
const upload = multer({storage});

const listingcontroller = require("../controller/listing.js");

router
.route("/")
.get(wrapasync(listingcontroller.index))//index route
.post(isloggedIn,validateListing,upload.single("listing[image]"),wrapasync(listingcontroller.createListing)); // create route

// new route
router.get("/new",isloggedIn,listingcontroller.renderNewForm);

router.get("/search", wrapasync(listingcontroller.index));

router
.route("/:id")
.get(wrapasync(listingcontroller.showListing)) //show route
.put(isloggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapasync(listingcontroller.renderupdateForm)) //update route
.delete(isloggedIn,isOwner,wrapasync(listingcontroller.destroy)); // delete route

//edit Route
router.get("/:id/edit",isloggedIn,isOwner,validateListing,wrapasync(listingcontroller.renderEditForm));

module.exports = router;