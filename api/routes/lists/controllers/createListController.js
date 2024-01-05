const List = require("../../../models/List");

const createListController = async (req, res) => {
    if (!req.user.isAdmin) {
        res.status(403).json("You are not allowed!");
    }

    const newList = new List(req.body);
    try {
        const savedList = await newList.save();
        res.status(201).json(savedList);
    } catch (err) {
        res.status(500).json(err);
    }
  }

  module.exports = {
    createListController
  }