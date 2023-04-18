const express = require("express");

const router = express.Router();
const { validateBody } = require("../../middlewares");
const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const schemas = require("../../schemas");

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  validateBody(schemas.putContactsSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  validateBody(schemas.putContactsSchema),
  ctrlWrapper(ctrl.updateContact)
);

module.exports = router;
