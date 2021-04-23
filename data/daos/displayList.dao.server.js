const animeDao = require('./anime.dao.server');

const displayListModel = require('../models/DisplayList/displayList.model.server');

const findAllDisplayLists = () =>
    displayListModel.find()

const findDisplayListsById = (did) =>
    displayListModel.findById(did)

const findAllAnime = () =>
    // displayListModel.find();
    displayListModel.find().populate('anime');

const findByAnimeId = (aid) =>
    displayListModel.find({anime: aid});



const createDisplayList = (displayList) =>
    displayListModel.create(displayList);


const deleteDisplayList = (did) =>
    displayListModel.findByIdAndDelete({_id: did});


const addAnime = (anime) =>
    displayListModel.createAnime(anime)
    // animeDao.createAnime(anime).then(anime => displayListModel.findByIdAndUpdate({_id: did}, {$push:
    // {animes: anime}}).populate("animes"));


const deleteAnime = (did) =>
    displayListModel.findOneAndDelete({anime: did});


module.exports = {
    findAllDisplayLists,
    findDisplayListsById,
    findAllAnime,
    createDisplayList,
    deleteDisplayList,
    addAnime,
    deleteAnime,
    findByAnimeId
}
