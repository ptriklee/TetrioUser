const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const axios = require('axios');
const FavoritedUser = require('../db/index.js')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

// app.use(cors({
//   origin: `http://localhost:${PORT}`,
//   credentials: true,
//   })
// )

app.get('/general', (req, res) => {
  axios.get('https://ch.tetr.io/api/general/stats')
    .then(response => {
      // console.log('data >>', response.data.data)
      res.send(response.data)
    })
    .catch(err => {
      console.log('err >>', err)
      res.send(err)
    })
})

app.get('/users/:user', (req, res) => {
  console.log('search req>>', req.params)
  const name = req.params.user;
  axios.get(`https://ch.tetr.io/api/users/${name}`)
    .then(response => {
      // console.log('data >>', response.data.data)
      res.send(response.data)
    })
    .catch(err => {
      console.log('err >>', err)
      res.send(err)
    })
})

app.get('/favorited', (req, res) => {
  FavoritedUser.find({})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send('err', err)
    })
})

app.post('/favorited', (req, res) => {
  // findOneAndUpdate( filter, update, options )
  // console.log('REQ BODY>>', req.body)
  FavoritedUser.findOneAndUpdate(
    {username: req.body.username},
    {
      username: req.body.username,
      gamesplayed: req.body.gamesplayed,
      gameswon: req.body.gameswon,
      gametime: req.body.gametime,
    },
    {upsert: true, new: true})
    .then(data => {
      console.log('sucess posted into db >>')
      res.status(201).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

app.delete('/favorited/:username', (req, res) => {
  const user = req.params.username
  FavoritedUser.deleteOne({username: user})
    .then(data => {
      console.log('deleted data>>', data)
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send('err', err)
    })
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});