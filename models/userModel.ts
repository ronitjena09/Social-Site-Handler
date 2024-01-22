import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  }
},{timestamps:true});

const User = mongoose.models.users || mongoose.model("users",userSchema);
export default User;