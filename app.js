require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const expressError = require("./utils/expressError.js");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require("connect-mongo").default || require("connect-mongo"); //store session information
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const dns = require("dns");
dns.setServers(["8.8.8.8","8.8.4.4"]);

const listingRouter = require("./Routes/listing.js");
const reviewsRouter = require("./Routes/review.js");
const userRouter = require("./Routes/user.js");

app.set("views", path.join(__dirname, "views")); // 7. Q: Why do we use path.join(__dirname, "views") instead of a hardcoded path?
//path.join ensures cross-platform compatibility. Different operating systems use different path separators (/ vs \). Using path.join makes the code portable and avoids errors when running on different environments
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

let mongourl = process.env.ATLAS_STRING;

main()
  .then(() => {
    console.log("connection was sucssesful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongourl);
}
//mongodb://localhost:27017/wonderlust
app.engine("ejs", ejsMate);
// here you write cons not hoisted
const store = MongoStore.create({
   mongoUrl : mongourl,
   crypto : {
    secret : process.env.SECRET,
   },
   touchAfter : 24*3600,
});

store.on("error",(err)=>{
  console.log("ERROR IN MONGO SESSIONS",err);
}) ;

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge:  14 * 60 * 1000,
    httpOnly: true,
  },
};

app.use((req, res, next) => {
  if (req.isAuthenticated()) {
    // Reset cookie expiry on every request (sliding session)
    req.session.cookie.maxAge = 14 * 60 * 1000;
  }
  next();
});

// app.get("/",(req,res)=>{
//     res.send("this is the root");
// })

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session()); // same user to flip the page
passport.use(new LocalStrategy(User.authenticate())); //static method of authenticate strategy

passport.serializeUser(User.serializeUser()); // seriealize to serialize into the sesssion store the user reated information
passport.deserializeUser(User.deserializeUser()); // deserialize session end remove user information

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user; //store current user information
  res.locals.searchQuery = req.query.search || "";
  next();
});

app.use("/listing", listingRouter);

app.use("/listing/:id/reviews", reviewsRouter);

app.use("/", userRouter);

app.use((req, res, next) => {
  next(new expressError(404, "page not found!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "somethong went wrong" } = err;
  res.status(statusCode).render("listings/error.ejs", { err });
  //res.status(statusCode).send(message);
});
app.listen(8080, (req, res) => {
  console.log("server start listening");
});
