const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const {
  createResume,
  getAllResumes,
  getResume,
  updateResume,
  deleteResume
} = require('../controllers/resume.controller');

router.post('/', auth, createResume);
router.get('/', auth, getAllResumes);
router.get('/:id', auth, getResume);
router.put('/:id', auth, updateResume);
router.delete('/:id', auth, deleteResume);

module.exports = router;