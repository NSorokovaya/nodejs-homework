const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");

const { validateBody, isvalidId } = require("../../middlewares");

const schemas = require("../../schemas");

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", isvalidId, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  validateBody(schemas.putContactsSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete("/:contactId", isvalidId, ctrlWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  isvalidId,
  validateBody(schemas.putContactsSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  isvalidId,
  validateBody(schemas.updateFavorite),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
