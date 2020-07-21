const express = require('express')
const app = express()

// Middleware goes here
app.use(express.urlencoded({ extended: false }))

// ROUTES
app.get('/', (req, res) => {
  res.send('Nothing to see here, move along human')
})

// LISTEN
app.listen(process.env.PORT || 3000, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${process.env.PORT || 3000} 🎧`)
})