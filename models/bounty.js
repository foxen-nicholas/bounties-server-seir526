// Require Mongoose
const mongoose = require('mongoose')

// Create a schema
const bountySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100
  },
  wantedFor: {
    type: String,
    required: true
  },
  client: {
    type: String,
    default: 'Anonymous'
  },
  ship: String,
  reward: {
    type: Number,
    default: 1000
  },
  hunters: Array,
  captured: {
    type: Boolean,
    default: false
  },
  lastSeen: String
})

// Create and export the model
module.exports = mongoose.model('Bounty', bountySchema)