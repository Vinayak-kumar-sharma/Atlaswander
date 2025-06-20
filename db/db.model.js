import mongoose from "mongoose";


const cachedresult  = new mongoose.Schema({
  lat : Number,
  lon : Number,
  result : Object,
  createdAt: { type: Date, default: Date.now, expires: "7d" }
})


module.exports = mongoose.model("CachedResult", cachedresult);