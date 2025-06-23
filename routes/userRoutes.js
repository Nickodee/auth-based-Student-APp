const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const { authorizeRoles } = require('../middlewares/roleMiddleware');

// Protect all user routes
router.use(protect);

// Get all users — admin only
router.get('/', authorizeRoles('admin'), getUsers);

// Get one user — self or admin
router.get('/:id', getUser);

// Update user — self or admin
router.put('/:id', updateUser);

// Delete user — admin only
router.delete('/:id', authorizeRoles('admin'), deleteUser);

module.exports = router;
