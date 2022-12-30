require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)


// connect to db 
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
      // listen to port
     app.listen(process.env.PORT, () => {
     console.log('✔connected to DB listening on 👽port', process.env.PORT)
     })
     
  })
  .catch((err) => {
    console.log(err)
  })
  
   