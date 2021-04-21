const hopeListService = require('../services/hopeList.service.server');

module.exports = (app) => {
    app.get('/api/hopeLists', (req, res) => {
        hopeListService.findAllHopeLists()
            .then(lists => res.send(lists))
    });

    app.post('/api/hopeLists', (req, res) => {
        hopeListService.createHopeList(req.body)
            .then(list => res.send(list))
    });

    app.get('/api/hopeLists/users/:uid', (req, res) => {
        hopeListService.findHopeListByUserId(req.params['uid'])
            .then(list => res.send(list))
    });

    app.get('/api/hopeLists/:hid', (req, res) => {
        hopeListService.findHopeListById(req.params['hid'])
            .then(list => res.send(list))
    });

    app.put('/api/hopeLists/:hid', (req, res) => {
        hopeListService.addAnime(req.params['hid'], req.body)
            .then(anime => res.send(anime))
    });

    app.get('/api/hopeLists/users/:uid/animes', (req, res) => {
        hopeListService.findAllHopeToWatchAnimesByUserId(req.params['uid'])
            .then(animes => res.send(animes))
    })

    app.put('/api/hopeLists/users/:uid/animes/delete/:aid', (req, res) => {
        hopeListService.deleteAnime(req.params['uid'], req.params['aid'])
            .then(animes => res.send(animes))
    })
}