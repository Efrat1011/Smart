// routes/profileRoutes.js
const express = require('express')
const router = express.Router()
const { getProfile } = require('../controllers/profileControllers')

// req.pool қолдану үшін middleware қосу (егер керек болса)
router.use((req, res, next) => {
  req.pool = require('../config/db') // мысалы: pool export жасалған файл
  next()
})

router.get('/', getProfile)

module.exports = router
