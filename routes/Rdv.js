const express = require("express");
const rdvRouter = express.Router();

const {
  getRdv,
  getAllRdvs,
  updateRdv,
  deleteRdv,
  createRdv,
} = require("../controllers/Rdv");
const auth = require("../middleware/authentication");
rdvRouter.route("/").get(auth,getAllRdvs).post(createRdv);
rdvRouter.route("/:rdvId").get(auth,getRdv).delete(auth,deleteRdv).put(auth,updateRdv);
module.exports=rdvRouter