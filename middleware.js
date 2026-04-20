const Listing = require("./models/listing.js");
const {ListingSchema,ReviewSchema} = require("./schema.js");
const expressError = require("./utils/expressError.js");

module.exports.isloggedIn = (req,res,next)=>{
    
    if(!req.isAuthenticated()){
    req.session.redirectUrl = req.originalUrl;
    req.flash("error","you must be logged in first");
    return res.redirect("/login");
    }
    next();
}
//passport authority
module.exports.saveRedirectUrl = (req,res,next)=>{
   if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl;
   } 
   next();
}
//owner 
module.exports.isOwner = async(req,res,next)=>{
     let {id} = req.params;
      let listing = await Listing.findById(id);
      if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","you are not the owner of these list");
        return res.redirect(`/listing/${id}`);
      }
     next() 
};
module.exports.validateListing = (req,res,next)=>{
    let{error} = ListingSchema.validate(req.body);
    console.log(error);
    if(error){
        let errmsg = error.details.map((el)=>el.message).join(",")
        return next(new expressError(400,errmsg));
    }
    else{
        next();
    }
}

module.exports.validateReview = (req,res,next)=>{
    let{error} = ReviewSchema.validate(req.body);
    console.log(error);
    if(error){
        let errmsg = error.details.map((el)=>el.message).join(",");
        return next( new expressError(400,errmsg));
    }
    else{
        next();
    }
}