const { ObjectId } = require('mongodb');
const { getDB } = require('../config/db');

// GET all comebacks
async function getAllComebacks(req, res) {
  try {
    const db = getDB();
    const comebacks = await db.collection('comebacks').find().toArray();
    res.json(comebacks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch comebacks' });
  }
}

// GET comeback by ID
async function getComebackById(req, res) {
  try {
    const db = getDB();
    const comeback = await db.collection('comebacks').findOne({ _id: new ObjectId(req.params.id) });
    if (!comeback) return res.status(404).json({ error: 'Comeback not found' });
    res.json(comeback);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch comeback' });
  }
}

// GET comebacks by group name
async function getComebacksByGroup(req, res) {
  try {
    const db = getDB();
    const groupName = req.params.groupName;
    const comebacks = await db.collection('comebacks').find({ group: groupName }).toArray();
    res.json(comebacks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch comebacks by group' });
  }
}

// POST create comeback
async function createComeback(req, res) {
  try {
    const db = getDB();
    const newComeback = req.body;
    const result = await db.collection('comebacks').insertOne(newComeback);
    res.status(201).json(result.ops?.[0] || newComeback);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create comeback' });
  }
}

// PUT update comeback
async function updateComeback(req, res) {
  try {
    const db = getDB();
    const updated = await db.collection('comebacks').findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body },
      { returnDocument: 'after' }
    );
    if (!updated.value) return res.status(404).json({ error: 'Comeback not found' });
    res.json(updated.value);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update comeback' });
  }
}

// DELETE comeback
async function deleteComeback(req, res) {
  try {
    const db = getDB();
    const result = await db.collection('comebacks').deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Comeback not found' });
    res.json({ message: 'Comeback deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete comeback' });
  }
}

module.exports = {
  getAllComebacks,
  getComebackById,
  getComebacksByGroup,
  createComeback,
  updateComeback,
  deleteComeback
};