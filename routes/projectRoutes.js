const express = require('express');
const router = express.Router();
const {
  createProject, getProjects, updateProject, deleteProject
} = require('../controllers/projectController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, createProject);
router.get('/', protect, getProjects);
router.put('/:id', protect, updateProject);
router.delete('/:id', protect, deleteProject);

module.exports = router;
