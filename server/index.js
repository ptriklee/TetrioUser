const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const axios = require('axios');

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

app.get('/users', (req, res) => {
  const name = req.body.name;
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

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});