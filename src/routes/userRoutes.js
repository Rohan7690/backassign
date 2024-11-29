const express = require('express');
const { getUsers } = require('../controllers/userController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authenticate, authorize(['Admin']), getUsers);

module.exports = router;
