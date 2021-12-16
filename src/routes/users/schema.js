import Mongoose from "mongoose";

const UserSchema = new Mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      min: 3,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default:
        "https://res.cloudinary.com/dzqbzqgqw/image/upload/v1598424851/default_profile_picture_qxqzqr.png",
    },
    coverPicture: {
      type: String,
      default:
        "https://res.cloudinary.com/dzqbzqgqw/image/upload/v1598424851/default_cover_picture_qxqzqr.png",
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timeStamps: true }
);

export default Mongoose.model("User", UserSchema);
