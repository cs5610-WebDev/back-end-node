const animeDao = require('./anime.dao.server');

const hopeListModel = require('../models/HopeList/hopeList.model.server');

const findAllHopeLists = () => {
    hopeListModel.find();
}

const findHopeListById = (hid) => {
    hopeListModel.findById({_id: hid});
}

const findHopeListByUserId = (uid) => {
    hopeListModel.find({userId: uid});
}

const findAllHopeToWatchAnimesByUserId = (uid) => {
    hopeListModel.find({userId: uid}).populate('animes');
}

const createHopeList = (hopeList) => {
    hopeListModel.create(hopeList);
}

const deleteHopeList = (hid) => {
    hopeListModel.findByIdAndDelete({_id: hid});
}

const addAnime = (hid, anime) => {
    // animeDao.createAnime(anime).then(anime => hopeListModel.findByIdAndUpdate({_id: hid}), {$push:
    //         {animes: anime._id}}).populate("animes");
    hopeListModel.findByIdAndUpdate({_id: hid}, {$push: {animes: anime._id}});
}

const deleteAnime = (hid, aid) => {
    hopeListModel.findByIdAndUpdate({_id: hid}, {$pull: {animes: {_id: aid}}});
}