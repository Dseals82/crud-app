const axios = require('axios');


exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/users')
        .then((resp)=>{
            console.log(resp.data)
            res.render('index', {users: resp.data})
        })
        .catch(err => {
            res.send(err)
        })
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    axios.get('http://localhost:3000/api/users', {params: {id:req.query.id}})
        .then((userData)=>{
            res.render("update_user", {user:userData.data})
        })
        .catch(err => {
            res.send(err)
        })
}