const userDao = require('../data/daos/user.dao.server');

const findAllUsers = () =>
    userDao.findAllUsers()


const findUserById = (uid) =>
    userDao.findUserById(uid)


const findUserByUsername = (username) =>
    userDao.findUserByUsername(username)


const logIn = (username, password) =>
    userDao.logIn(username, password)


const createUser = (user) =>
    userDao.createUser(user)

const updateUser = (uid, user) =>
    userDao.updateUser(uid, user);

const deleteUser = (uid) =>
    userDao.deleteUser(uid)


module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername,
    logIn,
    createUser,
    updateUser,
    deleteUser
}