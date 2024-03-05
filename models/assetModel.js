const mongoose = require("mongoose");
const assetSchema = new mongoose.Schema({
    assetId: {
        type: String,
        required: [true, "an Asset ID must be provided"],
        unique: true,
    },
    name: {
        type: String,
        required: [true, "An asset name must be provided"],
    },
    assetType: {
        type: String,
        required: false,
    },
    assetLocation: {
        type: String,
        required: true,
    },
    purchaseDate: {
        type: String,
        required: true,
    },
    InitialCost: {
        type: Number,
        required: false,
    },
    operationalStatus: {
        type: Boolean,
        required: true,
    },
});
const Asset = mongoose.model("Asset", assetSchema);
module.exports = Asset;
