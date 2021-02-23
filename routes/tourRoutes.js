const express = require("express");
const router = express.Router();
const tourController = require("./../controllers/tourController");

router.route("/").get(tourController.getAllTours).post(tourController.addTour);

router
  .route("/:id")
  .get(tourController.getOnlyATour)
  .patch(tourController.editTour)
  .delete(tourController.deleteTour);

module.exports = router;
