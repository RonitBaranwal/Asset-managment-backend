const express = require("express");
const assetController = require("./../controllers/assetController");
const router = express.Router();

router.route("/").post(assetController.createAsset);

router
    .route("/:id")
    .get(assetController.getAsset)
    .delete(assetController.deleteAsset)
    .patch(assetController.updateAsset);
router.route("/:userid/alldata").get(assetController.getAllAsset);
module.exports = router;
