const express = require('express');
const router = express.Router();
const {
  getAllPhrases,
  getPhraseById,
  getPhrasesByGroup,
  createPhrase,
  updatePhrase,
  deletePhrase
} = require('../controllers/phraseController');

router.get('/', getAllPhrases);
router.get('/:id', getPhraseById);
router.get('/group/:groupName', getPhrasesByGroup);
router.post('/', createPhrase);
router.put('/:id', updatePhrase);
router.delete('/:id', deletePhrase);

module.exports = router;