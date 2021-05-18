import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import authorRoutes from "./Author/index.js";

const server = express();
const port = 3001;

server.use(cors());
server.use(express.json());
server.use("/author", authorRoutes);
console.log(listEndpoints(server));
server.listen(port, () => {
  console.log(port);
});
