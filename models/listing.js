const mongoose = require("mongoose");
const review = require("./review.js")

const Schema = mongoose.Schema;
const ImageSchema = new Schema({
  url: { type: String, required: true },
  filename: { type: String }
});


const listingSchema = new Schema({
    title :{
        type : String,
        required : true
    },
    description : String,
    image :ImageSchema,
    price : Number,
    location : String,
    country : String,

    reviews :[
      {
        type : Schema.Types.ObjectId,
        ref : "Review"
      }
    ],
    owner : {
      type : Schema.Types.ObjectId,
      ref : "User",
    },
    //apear at bottom 
    geometry : {
    type : {
      type : String, // dont do {location {type : String}}
      enum : ['Point'],// locationtype must be Point
      // required : true,
    },
    coordinates : {
      type : [Number],
      // required : true,
    }
  },
  category: {
    type: String,
    enum: ["trending", "rooms", "iconic cities", "castles",
           "amazing pools", "camping", "farms", "arctic", "domes", "boat","other"],
    default: "trending"
  }
});

listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
     await review.deleteMany({_id : {$in : listing.reviews}});
  }
})

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;