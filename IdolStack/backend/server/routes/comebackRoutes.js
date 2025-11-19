const express = require('express');
const router = express.Router();
const {
  getAllComebacks,
  getComebackById,
  getComebacksByGroup,
  createComeback,
  updateComeback,
  deleteComeback
} = require('../controllers/comebackController');

router.get('/', getAllComebacks);
router.get('/:id', getComebackById);
router.get('/group/:groupName', getComebacksByGroup);
router.post('/', createComeback);
router.put('/:id', updateComeback);
router.delete('/:id', deleteComeback);

module.exports = router;