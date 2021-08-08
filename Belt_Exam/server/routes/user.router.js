
const UserController = require('../controllers/user.controller');
module.exports = function(app){
    app.get('/api', UserController.index);
    app.post('/api/people', UserController.createUser);
    app.get('/api/people', UserController.getAllUser);
    app.get('/api/people/:id', UserController.getUser);
    app.delete('/api/people/:id', UserController.deleteUser);
    app.put('/api/people/:id', UserController.updateUser);
    app.get('/api/people/block/:s', UserController.findByStatus);
    app.put('/api/people/change/:id', UserController.change);
    app.put('/api/people/change/delet/:id', UserController.delet);

}
///api/people/change/delet
