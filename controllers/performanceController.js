const express = require("express");
const router = express.Router();
const app = express();
const Performance = require("./../models/Performance");
const Asset = require("./../models/assetModel");
exports.getPerformanceOfAsset = async (req, res) => {
    try {
        const asset = await Asset.findOne({ assetId: req.params.id });

        try {
            const performance = await Performance.findOne({
                assetId: req.params.id,
            });
            res.status(200).json({
                status: 200,
                data: {
                    performance,
                },
            });
        } catch (err) {
            res.status(500).json({
                message: "An error occured",
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: "There was an no Asset of same id.",
        });
    }
};
exports.deletePerformanceOfAsset = async (req, res) => {
    try {
        const assetId = req.params.id;
        const performance = await Performance.deleteOne({ assetId });
        res.status(204).json({
            status: 204,
            result: "deleted the performance of the given asset id",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: "There was an no performance of the given asset id.",
        });
    }
};
exports.createAssetPerformance = async (req, res) => {
    try {
        try {
            console.log(req.body);
            const assetPerformance = await Performance.insertMany(req.body);
            res.status(201).json({
                status: "success",
                data: assetPerformance,
            });
        } catch (err) {
          console.log(err);
            res.status(400).json({
                result: "There was error for loading for this performance loading.",
                message: { err },
            });
        }

        // console.log(newAsset);
    } catch (err) {
        res.status(400).json({
            result: "no such AssetId was found enter correct ID",
            message: err,
        });
    }
};
