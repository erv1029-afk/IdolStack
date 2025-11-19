const { ObjectId } = require('mongodb');
const { getDB } = require('../config/db');

// GET all phrases
async function getAllPhrases(req, res) {
  try {
    const db = getDB();
    const phrases = await db.collection('phrases').find().toArray();
    res.json(phrases);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch phrases' });
  }
}

// GET phrase by ID
async function getPhraseById(req, res) {
  try {
    const db = getDB();
    const phrase = await db.collection('phrases').findOne({ _id: new ObjectId(req.params.id) });
    if (!phrase) return res.status(404).json({ error: 'Phrase not found' });
    res.json(phrase);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch phrase' });
  }
}

// GET phrases by group name
async function getPhrasesByGroup(req, res) {
  try {
    const db = getDB();
    const groupName = req.params.groupName;
    const phrases = await db.collection('phrases').find({ group: groupName }).toArray();
    res.json(phrases);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch phrases by group' });
  }
}

// POST create phrase
async function createPhrase(req, res) {
  try {
    const db = getDB();
    const newPhrase = req.body;
    const result = await db.collection('phrases').insertOne(newPhrase);
    res.status(201).json(result.ops?.[0] || newPhrase);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create phrase' });
  }
}

// PUT update phrase
async function updatePhrase(req, res) {
  try {
    const db = getDB();
    const updated = await db.collection('phrases').findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body },
      { returnDocument: 'after' }
    );
    if (!updated.value) return res.status(404).json({ error: 'Phrase not found' });
    res.json(updated.value);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update phrase' });
  }
}

// DELETE phrase
async function deletePhrase(req, res) {
  try {
    const db = getDB();
    const result = await db.collection('phrases').deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Phrase not found' });
    res.json({ message: 'Phrase deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete phrase' });
  }
}

module.exports = {
  getAllPhrases,
  getPhraseById,
  getPhrasesByGroup,
  createPhrase,
  updatePhrase,
  deletePhrase
};