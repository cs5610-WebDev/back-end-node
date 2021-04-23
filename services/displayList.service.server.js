const displayListDao = require('../data/daos/displayList.dao.server')

const findAllDisplayLists = () =>
    displayListDao.findAllDisplayLists();


const findDisplayListById = (did) =>
    displayListDao.findDisplayListsById(did);


const findHopeListByUserId = (uid) =>
    displayListDao.findDisplayListsById(uid);

const findByAnimeId = (aid) =>
    displayListDao.findByAnimeId(aid);

const findAllAnime = () =>
    displayListDao.findAllAnime();


const createDisplayList = (displayList) =>
    displayListDao.createDisplayList(displayList);


const deleteDisplayList = (hid) =>
    displayListDao.deleteDisplayList(hid);


const addAnime = (anime) =>
    displayListDao.addAnime(anime);


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
    deleteAnime,
    findByAnimeId
}