const hopeListDao = require('../data/daos/hopeList.dao.server')

const findAllHopeLists = () =>
    hopeListDao.findAllHopeLists();


const findHopeListById = (hid) =>
    hopeListDao.findHopeListById(hid);


const findHopeListByUserId = (uid) =>
    hopeListDao.findHopeListByUserId(uid);


const findAllHopeToWatchAnimesByUserId = (uid) =>
    hopeListDao.findAllHopeToWatchAnimesByUserId(uid);


const createHopeList = (uid, hopeList) =>
    hopeListDao.createHopeList(uid, hopeList);


const deleteHopeList = (hid) =>
    hopeListDao.deleteHopeList(hid);


const addAnime = (hid, anime) =>
    // animeDao.createAnime(anime).then(anime => hopeListModel.findByIdAndUpdate({_id: hid}), {$push:
    //         {animes: anime._id}}).populate("animes");
    hopeListDao.addAnime(hid, anime);


const deleteAnime = (hid, aid) =>
    hopeListDao.deleteAnime(hid, aid);


module.exports = {
    findAllHopeLists,
    findAllHopeToWatchAnimesByUserId,
    findHopeListById,
    findHopeListByUserId,
    createHopeList,
    deleteHopeList,
    addAnime,
    deleteAnime
}