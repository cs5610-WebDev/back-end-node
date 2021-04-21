const adminDao = require('../data/daos/admin.dao.server');

const findAllAdmins = () =>
    adminDao.findAllAdmins()


const findAdminById = (aid) =>
    adminDao.findAdminById(aid)


const findAdminByUsername = (username) =>
    adminDao.findAdminByUsername(username)


const logIn = (username, password) =>
    adminDao.logIn(username, password)


const createAdmin = (admin) =>
    adminDao.createAdmin(admin)

const updateAdmin = (aid, admin) =>
    adminDao.updateAdmin(aid, admin);

const deleteAdmin = (aid) =>
    adminDao.deleteAdmin(aid)


module.exports = {
    findAllAdmins,
    findAdminById,
    findAdminByUsername,
    logIn,
    createAdmin,
    updateAdmin,
    deleteAdmin
}