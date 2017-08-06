const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../schema/user');

mongoose.connect('mongodb://localhost/meanappdatabase');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  // axios.get(`${API}/posts`)
  //   .then(posts => {

  //     //Update records from 'https://jsonplaceholder.typicode.com' to mongoDB
  //     // for(var key in posts.data){
  //     //   if (posts.data.hasOwnProperty(key)) {
  //     //       //The current property is not a direct property of p

  //     //       // create a new user
  //     //       var newUser = User(posts.data[key]);

  //     //       // save the user
  //     //       newUser.save(function(err) {
  //     //         if (err) throw err;
  //     //         console.log('User created!');
  //     //       });
  //     //   }else continue;
  //     // }
  //     res.status(200).json(posts.data);
  //   })
  //   .catch(error => {
  //     res.status(500).send(error)
  //   });

    // get all the users
    User.find({}, function(err, users) {
      if (err) throw err;

      // object of all the users
      //console.log(users);
      res.status(200).json(users);
    });
});

module.exports = router;