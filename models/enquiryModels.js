import mongoose from "mongoose";

const userEnquiry = new mongoose.Schema({
  sName: {
    type: String,
    required: true,
  },
  sPhone: {
    type: String,
    required: true,
    unique: true,
  },
  sEmail: {
    type: String,
    required: true,
    unique: true,
  },
  sMessage: {
    type: String,
    required: false,
  },
});

export default mongoose.model("User-Enquiry",userEnquiry);
