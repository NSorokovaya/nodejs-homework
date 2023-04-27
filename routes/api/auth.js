const express = require("express");
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas");
const ctrl = require("../../controllers/auth/register");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
module.exports = router;
