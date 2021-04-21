const animeService = require('../services/anime.service.server');

module.exports = (app) => {

    app.get('/api/animes', (req, res) => {
        animeService.findAllAnime()
            .then(animes => res.send(animes))
    });

    app.post('/api/animes/create', (req, res) => {
        animeService.createAnime(res.body)
            .then(anime => req.send(anime))
    });

    app.get('/api/animes/:aid', (req, res) => {
        animeService.findAnimeById(req.params['aid'])
            .then(anime => res.json(anime))
    });

    app.put('/api/animes/:aid', (req, res) => {
        animeService.updateAnime(req.params['aid'], req.body)
            .then(anime => res.send(anime))
    });

    app.delete('/api/animes/:aid', (req, res) => {
        animeService.deleteAnime(req.params['aid'])
            .then(anime => res.send(anime))
    });

}