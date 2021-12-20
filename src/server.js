import express from "express";
import mongoose from "mongoose";
// import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import usersRouter from "./routes/users/users.js";
import listEndpoints from "express-list-endpoints";
import authRouter from "./routes/auth/auth.js";
import postRouter from "./routes/post/post.js";

dotenv.config();

const server = express();

const PORT = process.env.PORT || 3002;
const DATABASE_URI = process.env.MONGO_URI;

// **********Middlewares**********

// server.use(cors());
server.use(express.json());
server.use(helmet());
server.use(morgan("common"));

// **********Routes**********
server.use("/users", usersRouter);
server.use("/auth", authRouter);
server.use("/post", postRouter);

// server.get("/", (req, res) => {
//   res.send("Hello World");
// });

console.table(listEndpoints(server));

// **********Connect to MongoDB**********

mongoose.connect(
  DATABASE_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to database");
  }
);

mongoose.connection.on("connected", () => {
  server.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });
});
