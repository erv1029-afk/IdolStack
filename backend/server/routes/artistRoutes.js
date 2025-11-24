const express = require('express');
const router = express.Router();
const {
  getAllArtists,
  getArtistById,
  getArtistsByGroup,
  createArtist,
  updateArtist,
  deleteArtist
} = require('../controllers/artistController');

// GET all artists
router.get('/', getAllArtists);

// GET artist by ID
router.get('/:id', getArtistById);

// GET artists by group name (e.g. /api/artists/group/BTS)
router.get('/group/:groupName', getArtistsByGroup);

// POST new artist
router.post('/', createArtist);

// PUT update artist
router.put('/:id', updateArtist);

// DELETE artist
router.delete('/:id', deleteArtist);

module.exports = router;