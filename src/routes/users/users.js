import express from "express";
import user from "../users/schema.js";

const usersRouter = express.Router();

usersRouter.put("/:id", async (req, res) => {});

export default usersRouter;
