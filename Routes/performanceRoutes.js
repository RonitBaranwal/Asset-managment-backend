const express = require("express");
const performanceController = require("./../controllers/performanceController");
const router = express.Router();
const app = express();



router
    .route("/:id")
    .get(performanceController.getPerformanceOfAsset)
    .post(performanceController.createAssetPerformance)
    .delete(performanceController.deletePerformanceOfAsset);
module.exports = router;
