const router = require('express').Router()
const {User, Organism} = require('../db/models')
module.exports = router

//***** '/api/organisms' *****

//gets all organisms:
router.get('/', (req, res, next) => {
  Organism.findAll({})
    .then(organisms => res.json(organisms))
    .catch(next)
})

//gets single organism based on id
router.get('/:id', (req, res, next) => {
  Organism.findById(req.params.id)
    .then(organism => res.json(organism))
    .catch(next)
})

//creates single organism
router.post('/', (req,res,next)=>{
  return Organism.create(req.body)
    .then(organism => {
      res.json(organism)
    })
    .catch(next)
})
