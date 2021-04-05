const animeDao = require('./anime.dao.server');

const displayListModel = require('../models/DisplayList/displayList.model.server');

const findAllAnime = () => {
    displayListModel.find().populate('animes');
}

const createDisplayList = (displayList) => {
    displayListModel.create(displayList);
}

const deleteDisplayList = (did) => {
    displayListModel.findByIdAndDelete({_id: did});
}

const addAnime = (did, anime) => {
    animeDao.createAnime(anime).then(anime => displayListModel.findByIdAndUpdate({_id: did}, {$push:
    {animes: anime._id}}).populate("animes"));
}

const deleteAnime = (did, aid) => {
    displayListModel.findByIdAndUpdate({_id: did}, {$pull: {animes: {_id: aid}}});
}

module.exports = {
    findAllAnime,
    createDisplayList,
    deleteDisplayList,
    addAnime,
    deleteAnime
}
