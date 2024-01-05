/*
  Index files should only be used for import/export statements and contain no logic
*/
const { getListController } = require('./getListController');
const { deleteListController } = require('./deleteListController');
const { createListController } = require('./createListController');

module.exports = {
    getListController,
    deleteListController,
    createListController,
};
