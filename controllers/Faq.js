const Faq = require("../models/Faq");
const { NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const getAllFaqs = async (req, res) => {
  const faqs = await Faq.find({}); 
  res.status(StatusCodes.OK).json({ faqs });
};
const getFaq = async(req, res) => {
  const faq = await Faq.findById(req.params.faqId)
  if (!faq) {
    throw new NotFoundError(`No faq with id ${req.params.faqId}`);
  }
  res.status(StatusCodes.OK).json(faq)
};
const createFaq = async (req, res) => {
    console.log(new Date())
  const faq = await Faq.create({ ...req.body })
  res.status(StatusCodes.CREATED).json(faq)
};
const updateFaq = async(req, res) => {
  const faq=await Faq.findByIdAndUpdate(req.params.faqId, req.body, {
    new: true,
    runValidators: true,
  })
  if (!faq) {
    throw new NotFoundError(`No faq with id ${req.params.faqId}`);
  }
  res.status(StatusCodes.OK).json(faq)
};
const deleteFaq = async(req, res) => {
  const faq = await Faq.findByIdAndDelete(req.params.faqId)
  res.status(StatusCodes.OK).json({"success":`faq deleted`})
};
module.exports = { getAllFaqs, getFaq, updateFaq, deleteFaq, createFaq };
