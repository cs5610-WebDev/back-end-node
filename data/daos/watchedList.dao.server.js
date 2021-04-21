const animeDao = require('./anime.dao.server');
const watchedListModel = require('../models/WatchedList/watchedList.model.server');

const findAllWatchedLists = () =>
    watchedListModel.find();

const findWatchedListById = (hid) =>
    watchedListModel.findById({_id: hid});

const findWatchedListByUserId = (uid) =>
    watchedListModel.find({userId: uid});

const findAllWatchedAnimesByUserId = (uid) => {
    return watchedListModel.find({"userId": uid})
        .populate('animes').exec();
}

const createWatchedList = (watchedList) =>
    watchedListModel.create(watchedList);


const deleteWatchedList = (wid) =>
    watchedListModel.findByIdAndDelete({_id: wid});

const addAnime = (wid, anime) =>
    animeDao.createAnime(anime).then(anime => watchedListModel.findByIdAndUpdate({_id: wid}, {
        $push:
            {animes: anime._id}
    }));

const deleteAnime = (wid, aid) =>
    watchedListModel.findByIdAndUpdate({_id: wid}, {$pull: {animes: {_id: aid}}});

module.exports = {
    findAllWatchedLists,
    findWatchedListById,
    findWatchedListByUserId,
    findAllWatchedAnimesByUserId,
    createWatchedList,
    deleteWatchedList,
    addAnime,
    deleteAnime
}