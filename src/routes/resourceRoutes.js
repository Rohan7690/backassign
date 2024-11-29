const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');
const { getAdminData, getModeratorData, getUserData } = require('../controllers/resourceController');

router.get('/admin', authenticateToken, authorizeRoles('Admin'), getAdminData);
router.get('/moderator', authenticateToken, authorizeRoles('Moderator'), getModeratorData);
router.get('/user', authenticateToken, authorizeRoles('User'), getUserData);

module.exports = router;
