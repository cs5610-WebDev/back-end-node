const animeDao = require('../data/daos/anime.dao.server');

const findAllAnime = () =>
    animeDao.findAllAnime();


const findAnimeById = (aid) =>
    animeDao.findAnimeById(aid);


const createAnime = (anime) =>
    animeDao.createAnime(anime);


const deleteAnime = (aid) =>
    animeDao.deleteAnime(aid);


const updateAnime = (aid, anime) =>
    animeDao.updateAnime(aid, anime);


module.exports = {
    findAllAnime,
    findAnimeById,
    createAnime,
    deleteAnime,
    updateAnime
}