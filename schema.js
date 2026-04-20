const joi = require("joi");
const ListingSchema = joi.object({
    listing : joi.object({
      title : joi.string().required(),
      description : joi.string().required(),
      location : joi.string().required(),
      country : joi.string().required(),
      price : joi.number().required().min(0),
      image: joi.string().optional().allow("")
    }).required()
});
 const ReviewSchema = joi.object({
  review: joi.object({
    rating : joi.number().integer().min(1).max(5).required(),
    comment : joi.string().required(),
  }).required(),
 }).prefs({ convert: true });
 module.exports = {ListingSchema,ReviewSchema};
 