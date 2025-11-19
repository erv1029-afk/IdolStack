const { ObjectId } = require('mongodb');
const { getDB } = require('../config/db');

// GET all groups
async function getAllGroups(req, res) {
  try {
    const db = getDB();
    const groups = await db.collection('groups').find().toArray();
    res.json(groups);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch groups' });
  }
}

// GET group by ID
async function getGroupById(req, res) {
  try {
    const db = getDB();
    const group = await db.collection('groups').findOne({ _id: new ObjectId(req.params.id) });
    if (!group) return res.status(404).json({ error: 'Group not found' });
    res.json(group);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch group' });
  }
}

// POST create group
async function createGroup(req, res) {
  try {
    const db = getDB();
    const newGroup = req.body;
    const result = await db.collection('groups').insertOne(newGroup);
    res.status(201).json(result.ops?.[0] || newGroup);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create group' });
  }
}

// PUT update group
async function updateGroup(req, res) {
  try {
    const db = getDB();
    const updated = await db.collection('groups').findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body },
      { returnDocument: 'after' }
    );
    if (!updated.value) return res.status(404).json({ error: 'Group not found' });
    res.json(updated.value);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update group' });
  }
}

// DELETE group
async function deleteGroup(req, res) {
  try {
    const db = getDB();
    const result = await db.collection('groups').deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Group not found' });
    res.json({ message: 'Group deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete group' });
  }
}

module.exports = {
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroup,
  deleteGroup
};