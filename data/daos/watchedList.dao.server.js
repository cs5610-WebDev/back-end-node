const animeDao = require('./anime.dao.server');
const watchedListModel = require('../models/WatchedList/watchedList.model.server');
const mongoose = require('mongoose')

const findAllWatchedLists = () =>
    watchedListModel.find();

const findWatchedListById = (wid) =>
    watchedListModel.findById({_id: wid});

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
            {animes: anime._id}}));

const deleteAnime = (wid, anime) => {
    console.log(aid);
    return watchedListModel.findByIdAndDelete({_id: wid}, [{
        $pull:
            {animes: anime._id}
    }]);
    // return watchedListModel.findByIdAndDelete({_id: wid}, [{
    //     $pull:
    //         {animes: mongoose.Types.ObjectId(aid)}
    // }]);
    // return watchedListModel.findByIdAndUpdate({_id: wid}, [
    //     {
    //         $set: {
    //             animes: {
    //                 function: {
    //                     body: function(animes) {
    //                         for (let i = 0; i < animes.length; i++) {
    //                             if (animes[i] === aid) {
    //                                 delete animes[i];
    //                                 break;
    //                             }
    //                         }
    //                         return animes;
    //                     },
    //                     args: ["$animes"],
    //                     lang: "js"
    //                 }
    //             }
    //         }
    //
    // }]);
}

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