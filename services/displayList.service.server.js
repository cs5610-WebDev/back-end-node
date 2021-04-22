const displayListDao = require('../data/daos/displayList.dao.server')

const findAllDisplayLists = () =>
    displayListDao.findAllDisplayLists();


const findDisplayListById = (did) =>
    displayListDao.findDisplayListsById(did);


const findHopeListByUserId = (uid) =>
    displayListDao.findDisplayListsById(uid);


const findAllAnime = () =>
    displayListDao.findAllAnime();


const createDisplayList = (displayList) =>
    displayListDao.createDisplayList(displayList);


const deleteDisplayList = (hid) =>
    displayListDao.deleteDisplayList(hid);


const addAnime = (hid, anime) =>
    displayListDao.addAnime(hid, anime);


const deleteAnime = (hid, anime) =>
    displayListDao.deleteAnime(hid, anime);


module.exports = {
    findAllDisplayLists,
    findAllAnime,
    findDisplayListById,
    findHopeListByUserId,
    createDisplayList,
    deleteDisplayList,
    addAnime,
    deleteAnime
}