const watchingListService = require('../services/watchingList.service.server');

module.exports = (app) => {
    app.get('/api/watchingLists', (req, res) => {
        watchingListService.findAllWatchingLists()
            .then(lists => res.send(lists))
    });

    app.post('/api/watchingLists', (req, res) => {
        watchingListService.createWatchingList(req.body)
            .then(list => res.send(list))
    });

    app.get('/api/watchingLists/users/:uid', (req, res) => {
        watchingListService.findWatchingListByUserId(req.params['uid'])
            .then(list => res.send(list))
    });

    app.get('/api/watchingLists/:wid', (req, res) => {
        watchingListService.findWatchingListById(req.params['wid'])
            .then(list => res.send(list))
    });

    app.put('/api/watchingLists/:wid', (req, res) => {
        watchingListService.addAnime(req.params['wid'], req.body)
            .then(anime => res.send(anime))
    });

    app.get('/api/watchingLists/users/:uid/animes', (req, res) => {
        watchingListService.findAllWatchingAnimesByUserId(req.params['uid'])
            .then(animes => res.send(animes))
    })

    app.delete('/api/watchingLists/users/:uid/animes/delete/:aid', (req, res) => {
        watchingListService.deleteAnime(req.params['uid'], req.params['aid'])
            .then((animes) => res.send(animes))
    }
    )

    app.delete('/api/watchingLists/users/:uid/animes/delete', (req, res) => {
        watchingListService.deleteAnime(req.params['uid'], req.body)
            .then(animes => res.send(animes))
    })
}