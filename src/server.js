import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const server = express();

const PORT = process.env.PORT || 3001;
const DATABASE_URI = process.env.MONGO_URI;

server.use(cors());
server.use(express.json());

mongoose.connect(DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  server.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });
});
