const express = require('express')

const router = express.Router()

//Get all workouts
router.get('/', (req, res) =>{
    res.json({mssg:`Get all workouts`})
})

//Get a single workout
router.get('/id:', (req, res) =>{
    res.json({mssg:`Get single workout`})
})

//Post a new workout
router.post('/', (req, res) =>{
    res.json({mssg:`Post all workouts`})
})

//Delete a workout
router.delete('/id:', (req, res) =>{
    res.json({mssg:`Delete a workout`})
})

//Update a workout
router.patch('/id:', (req, res) =>{
    res.json({mssg:`Update a workout`})
})




module.exports = router  