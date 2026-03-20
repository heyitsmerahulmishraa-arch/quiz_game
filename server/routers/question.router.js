import express from "express";
const questionRouter = express.Router();
import questionController from "../controllers/question.controller.js";

questionRouter.route("/create").post(questionController.createQuestion);
questionRouter.route("/questions").get(questionController.getAllQuestions);

export default questionRouter;