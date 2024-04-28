import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  bookings: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Bookings",
    },
  ],
});

export default mongoose.model("User", userSchema);

