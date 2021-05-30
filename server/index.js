// TODO: Create an express server
const cors = require('cors')
const express = require('express');
const path = require('path')
const app = express();
const port = 3000
const database = require('./db/index.js')


app.listen(port, () => {
  console.log(`express listening on port ${port}`)
})

// app.use('/client', express.static(path.join(__dirname, 'dist')))
// app.use(express.static(path.join(__dirname, 'dist')))

app.use(express.static(path.join(__dirname,  '../client/dist')))

app.get('/all', (req, res) => {
  database.getAll((err, data) => {
    if (err) {
      console.log('error from express while calling database.getAll:')
      console.log(err)
      res.status(400).send(err)
    } else {
      console.log('successfully called database.getAll')
      res.status(200).send(data)
    }
  })
})