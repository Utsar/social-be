import express from "express";

const PORT = process.env.PORT || 3001;

const server = express();
server.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
