const watchedListService = require('../services/watchedList.service.server');

module.exports = (app) => {
    app.get('/api/watchedLists', (req, res) => {
        watchedListService.findAllWatchedLists()
            .then(lists => res.send(lists))
    });

    app.post('/api/watchedLists', (req, res) => {
        watchedListService.createWatchedList(req.body)
            .then(list => res.send(list))
    });

    app.get('/api/watchedLists/users/:uid', (req, res) => {
        watchedListService.findWatchedListByUserId(req.params['uid'])
            .then(list => res.send(list))
    });

    app.get('/api/watchedLists/:wid', (req, res) => {
        watchedListService.findWatchedListById(req.params['wid'])
            .then(list => res.send(list))
    });

    app.put('/api/watchedLists/:wid', (req, res) => {
        watchedListService.addAnime(req.params['wid'], req.body)
            .then(anime => res.send(anime))
    });

    app.get('/api/watchedLists/users/:uid/animes', (req, res) => {
        watchedListService.findAllWatchedAnimesByUserId(req.params['uid'])
            .then(animes => res.send(animes))
    })

    // app.delete('/api/watchedLists/users/:uid/animes/delete/:aid', (req, res) => {
    //     watchedListService.deleteAnime(req.params['uid'], req.params['aid'])
    //         .then(animes => res.send(animes))
    // }

    app.delete('/api/watchedLists/users/:uid/animes/delete', (req, res) => {
        watchedListService.deleteAnime(req.params['uid'], req.body)
            .then(animes => res.send(animes))
    })
}