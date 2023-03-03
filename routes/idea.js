const express = require('express')
const router = express.Router()
const ideaController = require('../controllers/idea')

router.get('/', ideaController.getIdea)

module.exports = router