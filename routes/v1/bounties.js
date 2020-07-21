// import stuff
const express = require('express')
const router = express.Router()

// write sum routes
// Index
router.get('/', (req, res) => {
  res.send('INDEX')
})

// Show
router.get('/:id', (req, res) => {
  res.send('SHOW')
})

// Create
router.post('/', (req, res) => {
  res.send('CREATE')
})

// Update
router.put('/:id', (req, res) => {
  res.send('UPDATE')
})

// Delete
router.delete('/:id', (req, res) => {
  res.send('DELETE')
})

// export dem routes
module.exports = router