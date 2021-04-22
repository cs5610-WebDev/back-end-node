const animeDao = require('./anime.dao.server');

const displayListModel = require('../models/DisplayList/displayList.model.server');

const findAllDisplayLists = () =>
    displayListModel.find()

const findDisplayListsById = (did) =>
    displayListModel.findById(did)

const findAllAnime = () =>
    displayListModel.find().populate('animes');


const createDisplayList = (displayList) =>
    displayListModel.create(displayList);


const deleteDisplayList = (did) =>
    displayListModel.findByIdAndDelete({_id: did});


const addAnime = (did, anime) =>
    animeDao.createAnime(anime).then(anime => displayListModel.findByIdAndUpdate({_id: did}, {$push:
    {animes: anime}}).populate("animes"));


const deleteAnime = (did, anime) =>
    displayListModel.findByIdAndUpdate({_id: did}, [{$pull: {animes: anime}}]);


module.exports = {
    findAllDisplayLists,
    findDisplayListsById,
    findAllAnime,
    createDisplayList,
    deleteDisplayList,
    addAnime,
    deleteAnime
}
