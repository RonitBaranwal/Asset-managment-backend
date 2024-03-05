const express = require("express");
const router = express.Router();
const app = express();
const Asset = require("./../models/assetModel");
const User = require("../models/userModel");
exports.getAllAsset = async (req, res) => {
    try {
        const userId = req.params.userid;
        console.log(userId);
        const user = await User.findOne({"_id": userId});
        // console.log(user);
        try {
            const assets = await Asset.find();
            res.status(200).json({
                status: 200,
                data: {
                    assets,
                },
            });
        } catch (err) {
            console.error(err);
            res.status(400).json({ message: "Internal server error" });
        }
    } catch (err) {
        res.send({
            "msg":"the id for the user is wrong!!",
        })
    }
    
};
exports.getAsset = async (req, res) => {
    try {
        const asset = await Asset.findOne({ assetId: req.params.id });
        res.status(200).json({
            status: 200,
            data: {
                asset,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: "There was an error",
        });
    }
};
exports.deleteAsset = async (req, res) => {
    // const id = req.params.id;
    try {
        const assetId = req.params.id;
        const asset = await Asset.deleteOne({ assetId });
        res.status(204).json({
            status: 204,
            result: "deleted",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: "There was an error",
        });
    }
};
exports.createAsset = async (req, res) => {
    console.log(req.body);
    try {
        // console.log(req.body);
        const newAsset = new Asset(req.body);
        await newAsset.save();
        console.log(newAsset);
        res.status(201).json({
            status: "success",
            data: newAsset,
        });
        console.log(newAsset);
    } catch (err) {
        res.status(400).json({
            result: "Failed to load",
            message: err,
        });
    }
};
exports.updateAsset = async (req, res) => {
    // const id = req.params.id;
    try {
        console.log(req.body);
        const asset = await Asset.findByIdAndUpdate(
            { assetId: req.params.id },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        // const data = req.params.body;
        console.log(`${asset} is my Asset`);
        res.status(200).json({
            status: "success",
            data: {
                asset,
            },
        });
    } catch (err) {
        res.status(400).json({
            result: "Fail",
            message: err,
        });
    }
};
