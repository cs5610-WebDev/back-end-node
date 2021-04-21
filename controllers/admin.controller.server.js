const adminService = require('../services/admin.service.server');

module.exports = (app) => {

    const register = (req, res) => {
        adminService.createAdmin(req.body)
            .then(admin => {
                req.session.admin = admin;
                res.send(admin);
            })
    }

    const login = (req, res) => {
        adminService.logIn(req.body.userName, req.body.password)
            .then(admin => {
                if (admin != null) {
                    req.session.admin = admin;
                    req.session.cookie.maxAge = 24 * 60 * 60 * 1000;
                    this.admin = req.session.admin;
                    return res.send(admin);
                }
                res.send({result: false});
            })
    }

    const profile = (req, res) => {
        res.send(req.session.admin);
    }

    const logout = (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }

    const currentAdmin = (req, res) => {
        res.send(req.session.admin);
    }

    app.post('/api/admin/login', login);
    app.post('/api/admin/register', register);
    app.post('/api/admin/profile', profile);
    app.post('/api/admin/logout', logout);
    app.get('/api/admin/currentadmin', currentAdmin);

    app.post('/api/admin', (req, res) => {
        adminService.createAdmin(req.body)
            .then(admin => res.send(admin))
    });

    app.get('/api/admin', (req, res) => {
        adminService.findAllAdmins().then(admins => res.send(admins))
    });

    app.get('/api/admin/username/:username', (req, res) => {
        adminService.findAdminByUsername(req.params['username']).then(admins => res.json(admins))
    });

    app.get('/api/admin/:aid', (req, res) => {
        adminService.findAdminById(req.params['aid']).then(admin => {
            res.send(admin)
        })
    });

    app.put('/api/admin/:aid', (req, res) => {
        adminService.updateAdmin(req.params['aid'], req.body)
            .then(admin => {
                req.session.admin = admin;
                res.send(admin)
            })
    });

    app.delete('api/admin/:aid', (req, res) => {
        adminService.deleteAdmin(req.params['aid'])
            .then(admin => res.send("Deleted Successfully"))
    })

}