
const User = require("../models/user.js");

module.exports.getsignup = (req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.postsignup = async(req,res)=>{
    try{
    let{username,email,password} = req.body;
    const newUser = new User({email,username});
    const registerduser = await User.register(newUser,password);
    req.login(registerduser,(err)=>{
      if(err){
        return next(err);
      }
      req.flash("success","Welcome to WonderLust");
      res.redirect("/listing");
    })
    }
    catch(err){
        req.flash("error",err.message);
        res.redirect("/signup");
    }  
};

module.exports.getlogin = (req,res)=>{
    res.render("users/login.ejs");
};

module.exports.postlogin = async(req,res)=>{
 req.flash("success","Welcome to WonderLust ! you are logged in !");
 let redirectUrl = res.locals.redirectUrl || "/listing"
 res.redirect(redirectUrl);  //give passport problem
};

module.exports.logout = (req,res)=>{
    req.logout((err)=>{
     if(err){
       return next(err);
     } 
      req.flash("success","you are logged out!");
      res.redirect("/listing");  
    });
};