const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  app = express(),
  { Item } = require('./models/Item')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27018/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  Item.find()
    .then(items => res.render('index', { items }))
    .catch(err => res.status(404).json({ msg: 'No Items found' }))
})

app.post('/item/add', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  })

  newItem.save().then(item => res.redirect('/'))
})

const port = 3000

app.listen(port, () => console.log('Server running ...'))
