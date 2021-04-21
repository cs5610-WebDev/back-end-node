const watchingListDao = require('../data/daos/watchingList.dao.server')

const findAllWatchingLists = () =>
    watchingListDao.findAllWatchingLists();


const findWatchingListById = (wid) =>
    watchingListDao.findWatchingListById(wid);


const findWatchingListByUserId = (uid) =>
    watchingListDao.findWatchingListByUserId(uid);


const findAllWatchingAnimesByUserId = (uid) =>
    watchingListDao.findAllWatchingAnimesByUserId(uid);


const createWatchingList = (watchedList) =>
    watchingListDao.createWatchingList(watchedList);


const deleteWatchingList = (wid) =>
    watchingListDao.deleteWatchingList(wid);


const addAnime = (wid, anime) =>
    watchingListDao.addAnime(wid, anime);


const deleteAnime = (wid, aid) =>
    watchingListDao.deleteAnime(wid, aid);


module.exports = {
    findAllWatchingLists,
    findWatchingListByUserId,
    findWatchingListById,
    findAllWatchingAnimesByUserId,
    createWatchingList,
    deleteWatchingList,
    addAnime,
    deleteAnime
}