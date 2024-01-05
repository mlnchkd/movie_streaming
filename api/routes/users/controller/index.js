const { getUserStatsController } = require('./getUserStatsController');
const { getAllUsersController } = require('./getAllUsersController');
const { getUserController } = require('./getUserController');
const { deleteUserController } = require('./deleteUserController');
const { updateUserController } = require('./updateUserController');


module.exports = {
    getUserStatsController,
    getAllUsersController,
    getUserController,
    deleteUserController,
    updateUserController,
}