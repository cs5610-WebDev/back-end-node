const displayListService = require('../services/displayList.service.server');

module.exports = (app) => {
    app.get('/api/displayLists', (req, res) => {
        displayListService.findAllDisplayLists()
            .then(lists => res.send(lists))
    });

    app.post('/api/displayLists', (req, res) => {
        displayListService.createDisplayList(req.body)
            .then(list => res.send(list))
    });


    app.get('/api/displayLists/:did', (req, res) => {
        displayListService.findDisplayListById(req.params['did'])
            .then(list => res.send(list))
    });

    app.put('/api/displayLists/:did', (req, res) => {
        displayListService.addAnime(req.params['did'], req.body)
            .then(anime => res.send(anime))
    });

    app.get('/api/displayLists/:did/anime', (req, res) => {
        displayListService.findAllAnime(req.params['did'], req.body)
            .then(animes => res.send(animes))
    })

    app.put('/api/displayLists/:did/anime/delete', (req, res) => {
        displayListService.deleteAnime(req.params['did'], req.body)
            .then(animes => res.send(animes))
    })
}