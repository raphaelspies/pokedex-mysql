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

// app.get('/', (req, res) => {
//   res.send('hello, world')
// })