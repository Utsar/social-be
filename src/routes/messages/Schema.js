import Mongoose from "mongoose";

const MessageSchema = new Mongoose.Schema(
  {
    converationsId: {
      type: String,
    },

    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

export default Mongoose.model("Message", MessageSchema);
