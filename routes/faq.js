const express = require("express");
const faqRouter = express.Router();

const {
  getFaq,
  getAllFaqs,
  updateFaq,
  deleteFaq,
  createFaq,
} = require("../controllers/Faq");
const auth = require("../middleware/authentication");
faqRouter.route("/").get(getAllFaqs).post(createFaq);
faqRouter.route("/:faqId").get(getFaq).delete(auth,deleteFaq).put(auth,updateFaq);
module.exports=faqRouter