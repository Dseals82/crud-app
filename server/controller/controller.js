const Userdb = require('../model/model');

//create and save new user
exports.create = (req, res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    //new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
    })

    //save user in the database
    user
        .save(user)
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occured when creating user"
            });
        });
}

//retrieve and return all users/ retrive and return a single user
exports.find = (re, res) => {
    Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured when retrieving user"
            })
        })
}

//Update a new identified user by user id
exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Data can not be empty"
        })    
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data =>{
            if(!data){
                res.status(404).send({
                    message: `Cannot Update user with id: ${id}, user not found`
                })
            }else {
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Error Updating user information"
            })
        })
}

//Delete a user based off of id in request
exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: `Sorry, Cannot delete with id: ${id}, Check id`
                })
            }else {
                res.send({
                    message: "User was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `message: Could not delete User with id: ${id}`
            })
        })
}