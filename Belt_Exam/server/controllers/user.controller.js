const { User } = require('../models/user.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// Create
module.exports.createUser = (request, response) => {
    const { project, status,due } = request.body;
    User.create({
        project,
        status,
        due
    })
        .then(person => response.json(person))
        .catch(err => response.status(400).json(err))
}
// Reade
module.exports.getAllUser = (request, response) => {
    User.find({})
        .then(Users => response.json(Users))
        .catch(err => response.json(err))
}
module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(User => response.json(User))
        .catch(err => response.json(err))
}
// Delete
module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
// updateUser
module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, { runValidators: true })
        .then(updatedUser => response.json(updatedUser))
        .catch(err => response.status(400).json(err))
}
// sort by status
module.exports.findByStatus = (request, response) => {
  User.find({status: request.params.s})
      .then(User => response.json(User))
      .catch(err => response.json(err))
}
//changeBlocked
module.exports.change =(request, response) => {
  User.findOneAndUpdate({_id: request.params.id}, {status:request.body.stat}, { runValidators: true })
      .then(updatedUser => response.json(updatedUser))
      .then(console.log(request.body.stat))
      .catch(err => response.status(400).json(err))
}
// final change
module.exports.delet =(request, response) => {
  User.findOneAndUpdate({_id: request.params.id}, {status:request.body.stat}, { runValidators: true })
      .then(updatedUser => response.json(updatedUser))
      .then(console.log(request.body.stat))
      .catch(err => response.status(400).json(err))
}
