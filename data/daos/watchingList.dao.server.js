const animeDao = require('./anime.dao.server');
const watchingListModel = require('../models/WatchingList/watchingList.model.server');

const findAllWatchingLists = () =>
    watchingListModel.find();

const findWatchingListById = (wid) =>
    watchingListModel.findById({_id: wid});

const findWatchingListByUserId = (uid) =>
    watchingListModel.find({userId: uid});

const findAllWatchingAnimesByUserId = (uid) => {
    return watchingListModel.find({"userId": uid})
        .populate('animes').exec();
}

const createWatchingList = (watchedList) =>
    watchingListModel.create(watchedList);


const deleteWatchingList = (wid) =>
    watchingListModel.findByIdAndDelete({_id: wid});

const addAnime = (wid, anime) =>
    animeDao.createAnime(anime).then(anime => watchingListModel.findByIdAndUpdate({_id: wid}, {
        $push:
            {animes: anime._id}
    }));

const deleteAnime = (wid, anime) => {
    console.log(anime);
    return watchingListModel.findByIdAndUpdate({_id: wid}, [
        {
            $pull: {animes: anime}
        }
    ]);
}

module.exports = {
    findAllWatchingLists,
    findWatchingListById,
    findWatchingListByUserId,
    findAllWatchingAnimesByUserId,
    createWatchingList,
    deleteWatchingList,
    addAnime,
    deleteAnime
}