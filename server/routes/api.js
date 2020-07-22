const express = require('express')

const router = express.Router()

const User = require('../models/userModel')
const { json } = require('express')


//ROUTES

//Get all users and fill the list
router.get('/api/users', (req, res) => {

    User.find({})
    .then((data) => {
        console.log('Data: ', data)
        res.json(data)
    }).catch((error) => {
        console.log("error: ", error.message)
    })
})

//Add new user on the list
router.post('/api/adduser', (req, res) => {
    const data = req.body;
    const newUser = new User(data)
    newUser.save((error) => {
        if(error){
            res.status(500).json({msg: 'Sorry, internal server error.'})
            return
        }
        return res.json({
            msg: "We added a new user."
        })    
    })
})


router.delete('/api/delete/:id', async (req, res) => { 
    User.findByIdAndDelete(req.params.id, (error, user) => {
        if(error){
            res.status(500),json({msg: 'There was a problem deleting the user.'})
            return
        }
        res.status(200).send("User: " + user.fullname +" was removed from DB.")
    })
})


module.exports = router