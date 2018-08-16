const mongoose = require('mongoose'),
  Schema = mongoose.Schema

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Item = mongoose.model('Item', ItemSchema)

module.exports = {
  Item
}
