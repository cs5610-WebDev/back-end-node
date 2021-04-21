const watchedListDao = require('../data/daos/watchedList.dao.server')

const findAllWatchedLists = () =>
    watchedListDao.findAllWatchedLists();


const findWatchedListById = (hid) =>
    watchedListDao.findWatchedListById(hid);


const findWatchedListByUserId = (uid) =>
    watchedListDao.findWatchedListByUserId(uid);


const findAllWatchedAnimesByUserId = (uid) =>
    watchedListDao.findAllWatchedAnimesByUserId(uid);


const createWatchedList = (watchedList) =>
    watchedListDao.createWatchedList(watchedList);


const deleteWatchedList = (wid) =>
    watchedListDao.deleteWatchedList(wid);


const addAnime = (wid, anime) =>
    watchedListDao.addAnime(wid, anime);


const deleteAnime = (wid, aid) =>
    watchedListDao.deleteAnime(wid, aid);


module.exports = {
    findAllWatchedLists,
    findWatchedListByUserId,
    findWatchedListById,
    findAllWatchedAnimesByUserId,
    createWatchedList,
    deleteWatchedList,
    addAnime,
    deleteAnime
}