const { ObjectId } = require('mongodb');
const { getDB } = require('../config/db');

// GET all artists
async function getAllArtists(req, res) {
  try {
    const db = getDB();
    const artists = await db.collection('artists').find().toArray();
    res.json(artists);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch artists' });
  }
}

// GET artist by ID
async function getArtistById(req, res) {
  try {
    const db = getDB();
    const artist = await db.collection('artists').findOne({ _id: new ObjectId(req.params.id) });
    if (!artist) return res.status(404).json({ error: 'Artist not found' });
    res.json(artist);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch artist' });
  }
}

// GET artists by group name
async function getArtistsByGroup(req, res) {
  try {
    const db = getDB();
    const groupName = req.params.groupName;
    const artists = await db.collection('artists').find({ group: groupName }).toArray();
    res.json(artists);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch artists by group' });
  }
}

// POST create new artist
async function createArtist(req, res) {
  try {
    const db = getDB();
    const newArtist = req.body;
    const result = await db.collection('artists').insertOne(newArtist);
    res.status(201).json(result.ops?.[0] || newArtist);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create artist' });
  }
}

// PUT update artist
async function updateArtist(req, res) {
  try {
    const db = getDB();
    const updated = await db.collection('artists').findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body },
      { returnDocument: 'after' }
    );
    if (!updated.value) return res.status(404).json({ error: 'Artist not found' });
    res.json(updated.value);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update artist' });
  }
}

// DELETE artist
async function deleteArtist(req, res) {
  try {
    const db = getDB();
    const result = await db.collection('artists').deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Artist not found' });
    res.json({ message: 'Artist deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete artist' });
  }
}

module.exports = {
  getAllArtists,
  getArtistById,
  getArtistsByGroup,
  createArtist,
  updateArtist,
  deleteArtist
};