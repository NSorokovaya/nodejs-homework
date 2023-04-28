const express = require("express");

const router = express.Router();

const ctrlUser = require("../../controllers/users");
const { ctrlWrapper } = require("../../helpers");

const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas");

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrlUser.register)
);

module.exports = router;
