const animeService = require('../services/anime.service.server');

module.exports = (app) => {

    app.get('/api/animes', (req, res) => {
        animeService.findAllAnime()
            .then(animes => res.send(animes))
    });

    app.get('/api/animes/:aid', (res, req) => {
        animeService.findAnimeById(req.params['aid'])
            .then(anime => res.json(anime))
    });

    app.put('/api/animes/:aid', (res, req) => {
        animeService.updateAnime(res.params['aid'], res.body)
            .then(anime => req.send(anime))
    });

    app.delete('/api/animes/:aid', (req, res) => {
        animeService.deleteAnime(req.params['aid'])
            .then(anime => res.send(anime))
    });
}