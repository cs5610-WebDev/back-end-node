const useService = require('../services/user.service.server');

module.exports = (app) => {

    const register = (req, res) => {
        useService.createUser(req.body)
            .then(user => {
            req.session.user = user;
            res.send(user);
        })
    }

    const login = (req, res) => {
        useService.logIn(req.body.username, req.body.password)
        .then(user => {
            if (user) {
                req.session.user = user;
                req.session.cookie.maxAge = 24 * 60 * 60 * 1000;
                this.user = req.session.user;
                res.send(user);
            } else {
                res.send("0");
            }
        })
    }

    const profile = (req, res) => {
        res.send(req.session.user);
    }

    const logout = (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }

    const currentUser = (req, res) => {
        res.send(req.session.user);
    }

    app.post('/api/login', login);
    app.post('/api/register', register);
    app.post('/api/profile', profile);
    app.post('/api/logout', logout);
    app.get('/api/currentuser', currentUser);

    app.post('/api/users', (req, res) => {
        useService.createUser(req.body)
            .then(user => res.send(user))
    });

    app.get('/api/users', (req, res) => {
        useService.findAllUsers().then(users => res.send(users))
    });

    app.get('/api/users/username/:username', (req, res) => {
        useService.findUserByUsername(req.params['username']).then(users => res.json(users))
    });

    app.get('/api/users/:uid', (req, res) => {
        useService.findUserById(req.params['uid']).then(user => {
            res.send(user)
        })
    });

    app.put('/api/users/:uid', (req, res) => {
        useService.updateUser(req.params['uid'], req.body)
            .then(user => {
                req.session.user = user;
                res.send(user)
            })
    });

    app.delete('api/users/:uid', (req, res) => {
        useService.deleteUser(req.params['uid'])
            .then(user => res.send("Deleted Successfully"))
    })

}