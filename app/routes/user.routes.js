
module.exports = (app) => {

    const user = require('../controllers/user.controller.js');

    app.post('/user', user.create);

    app.get('/user', user.findAll);

    app.get('/user/:nodeId', user.findOne)

    app.put('/user/:noteId', user.update);

    app.delete('/user/:noteId', user.delete);
}