const List = require("../../../models/List");

const deleteListController = async (req, res) => {
    if (!req.user.isAdmin) {
        res.status(403).json("You are not allowed!");
    }

    try {
        await List.findByIdAndDelete(req.params.id);
        res.status(201).json("The list has been delete...");
    } catch (err) {
        res.status(500).json(err);
    }
  }

  module.exports = {
    deleteListController,
  }