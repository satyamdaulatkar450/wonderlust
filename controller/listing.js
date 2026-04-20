const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken});


module.exports.index = async(req,res)=>{
   const { search } = req.query;
    let alllisting;

  if (search) {
    // Case-insensitive search across title, description, location, country
    alllisting = await Listing.find({
      $or: [
        { title:       { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { location:    { $regex: search, $options: "i" } },
        { country:     { $regex: search, $options: "i" } },
      ]
    });
  } else {
    alllisting = await Listing.find({});
  }
   if (search && alllisting.length === 0) {
    req.flash("error", `No listings found for "${search}"`);
    return res.redirect("/listing/search"); // or back to /listing
  }
  return res.render("listings/index",{alllisting,searchQuery: search || ""});
};

module.exports.renderNewForm = (req,res)=>{
 res.render("listings/new.ejs");
};

module.exports.showListing = async(req,res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id).populate({path :"reviews",populate :{path : "author"},}).populate("owner");
    if(!listing){
        req.flash("error","Listing you requested does not exist !")
        return res.redirect("/listings");
    }
    return res.render("listings/show.ejs",{listing,mapToken });
};

module.exports.createListing = async(req,res,next)=>{
   let response = await geocodingClient
   .forwardGeocode({
    query : req.body.listing.location, // by default five diffrent cooerdinate limit
    limit : 1, // this is limit
   })
   .send();
   console.log(response.body.features);

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id; 
    newListing.image = {url,filename};
    newListing.geometry = response.body.features[0].geometry;
     let savedListing = await newListing.save();
     console.log(savedListing);
    req.flash("success","new Listing created !");
    return res.redirect("/listing");
};

module.exports.renderEditForm = async(req,res)=>{
  let{id} = req.params;
  const listing = await Listing.findById(id).populate("owner");
  if(!listing){
        req.flash("error","Listing you requested does not exist !")
        return res.redirect("/listings");
    }
    let originalImage = listing.image.url;
    originalImage = originalImage.replace("/upload","/upload/h_300,w_250");
  return  res.render("listings/edit",{listing,originalImage});
};

module.exports.renderupdateForm = async(req,res)=>{
  let {id} = req.params;
  let listing =  await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(req.file ){
    let url = req.file.path;
     let filename = req.file.filename;
     listing.image = {url,filename};
     await listing.save();
    }
  req.flash("success","Listing Updated !");
  return res.redirect("/listing");
};

module.exports.destroy = async(req,res)=>{
  let {id} = req.params;
  let deletedlisting = await Listing.findByIdAndDelete(id);
  req.flash("success","Listing deleted !");
  return res.redirect("/listing");
};