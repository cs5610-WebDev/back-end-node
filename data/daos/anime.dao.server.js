const animeModel = require('../models/Anime/anime.model.server');

const findAllAnime = () =>
    animeModel.find();


const findAnimeById = (aid) =>
    animeModel.findById(aid);


const createAnime = (anime) =>
    animeModel.create(anime);


const deleteAnime = (aid) =>
    animeModel.findByIdAndDelete({_id: aid});


const updateAnime = (aid, anime) =>
    animeModel.findByIdAndUpdate({_id: aid}, anime);


module.exports = {
    findAllAnime,
    findAnimeById,
    createAnime,
    deleteAnime,
    updateAnime
}