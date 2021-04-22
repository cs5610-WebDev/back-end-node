const UserModel = require('../models/User/WebUser/webUser.model.server');

const findAllUsers = () =>
   UserModel.find()

const findUserById = (uid) =>
    UserModel.findById(uid)


const findUserByUsername = (username) =>
    UserModel.find({"userName": username})


const logIn = (userName, password) =>
    UserModel.findOne({"userName": userName, "password": password})

const createUser = (user) =>
    UserModel.create(user)

const updateUser = (uid, user) =>
    UserModel.findByIdAndUpdate({_id: uid}, user);

const deleteUser = (uid) =>
    UserModel.findByIdAndDelete(uid);

module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername,
    logIn,
    createUser,
    updateUser,
    deleteUser
}