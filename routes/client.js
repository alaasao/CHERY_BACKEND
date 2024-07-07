const express = require("express");
const clientRouter = express.Router();

const {
  getClient,
  getAllClients,
  updateClient,
  deleteClient,
  createClient,
} = require("../controllers/Client");
const auth = require("../middleware/authentication");
clientRouter.route("/").get(getAllClients).post(auth,createClient);
clientRouter.route("/:clientId").get(getClient).delete(auth,deleteClient).put(auth,updateClient);
module.exports=clientRouter