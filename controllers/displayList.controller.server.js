const displayListService = require('../services/displayList.service.server');
const mongoose = require("mongoose");

module.exports = (app) => {
    app.get('/api/displayLists', (req, res) => {
        displayListService.findAllAnime()
            .then(lists => res.send(lists))
    });

    app.post('/api/displayLists/create', (req, res) => {
        displayListService.createDisplayList(req.body)
            .then(list => res.send(list))
    });

    app.get('/api/displayLists/:aid', (req, res) => {
        displayListService.findByAnimeId(req.params['aid'])
        .then(list => res.send(list))
    });


    app.get('/api/displayLists/:did', (req, res) => {
        displayListService.findDisplayListById(req.params['did'])
            .then(list => res.send(list))
    });


    app.get('/api/displayLists/:did/anime', (req, res) => {
        displayListService.findAllAnime(req.params['did'], req.body)
            .then(animes => res.send(animes))
    })

    app.delete('/api/displayLists/:did', (req, res) => {
        displayListService.deleteAnime(req.params['did'])
            .then(animes => res.send(animes))
    })
}