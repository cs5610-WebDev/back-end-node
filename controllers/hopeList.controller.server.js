const hopeListService = require('../services/hopeList.service.server');

module.exports = (app) => {
    app.get('/api/hopeLists', (req, res) => {
        hopeListService.findAllHopeLists()
            .then(lists => res.send(lists))
    })

    app.post('/api/hopeLists', (req, res) => {
        hopeListService.createHopeList()
    })
}