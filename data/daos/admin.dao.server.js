const adminModel = require('../models/User/AdminUser/adminUser.model.server');

const findAllAdmins = () =>
    adminModel.find()

const findAdminById = (aid) =>
    adminModel.findById(aid)


const findAdminByUsername = (username) =>
    adminModel.find({"userName": username})


const logIn = (userName, password) =>
    adminModel.findOne({"userName": userName, "password": password})


const createAdmin = (admin) =>
    adminModel.create(admin)

const updateAdmin = (aid, admin) =>
    adminModel.findByIdAndUpdate({_id: aid}, admin);

const deleteAdmin = (aid) =>
    adminModel.findByIdAndDelete(aid);

module.exports = {
    findAllAdmins,
    findAdminById,
    findAdminByUsername,
    logIn,
    createAdmin,
    updateAdmin,
    deleteAdmin
}