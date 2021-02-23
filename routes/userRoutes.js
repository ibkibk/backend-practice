const express = require("express");
const userController = require("./../controllers/userController");
const router = express.Router();

//3 routes

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route("/:id")
  .get(userController.getOneUsers)
  .patch(userController.editUser)
  .delete(userController.deleteUser);

module.exports = router;
