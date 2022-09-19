require('dotenv').config()
const express = require('express')
const workoutRoutes = require('../backend/routes/workout')


const app  = express()

//middleware
app.use(express.json())

app.search((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//route
app.use('/api/workouts',workoutRoutes)


app.listen(process.env.PORT, ()=>{
    console.log('listening on port', process.env.PORT)
})