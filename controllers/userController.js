const express = require('express');
const User = require('./../models/userModel');
exports.postUser = async (req, res) => {
  try {
    const data = await User.insertMany(req.body);
    res.status(200).send({
      msg:"User added success!!!"
    })
  } catch (err) {
    res.send({
      msg:'there was an error in posting a user',
    })
  }
}