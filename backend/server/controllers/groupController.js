const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

// 📥 GET all groups
async function getAllGroups(req, res) {
  try {
    const db = getDB();
    const groups = await db.collection("groups").find().toArray();
    res.status(200).json(groups);
  } catch (err) {
    console.error("❌ Error fetching groups:", err);
    res.status(500).json({ error: "Failed to fetch groups" });
  }
}

// 🔍 GET group by ID
async function getGroupById(req, res) {
  try {
    const db = getDB();
    const group = await db.collection("groups").findOne({
      _id: new ObjectId(req.params.id),
    });
    if (!group) return res.status(404).json({ error: "Group not found" });
    res.status(200).json(group);
  } catch (err) {
    console.error("❌ Error fetching group by ID:", err);
    res.status(500).json({ error: "Failed to fetch group" });
  }
}

// 🔗 GET group by slug (for frontend routing like /group/bts)
async function getGroupBySlug(req, res) {
  try {
    const db = getDB();
    const slug = req.params.slug;

    // More efficient: query directly instead of fetching all
    const groups = await db.collection("groups").find().toArray();
    const match = groups.find(
      g =>
        g.name &&
        g.name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "") === slug
    );

    if (!match) return res.status(404).json({ error: "Group not found" });
    res.status(200).json(match);
  } catch (err) {
    console.error("❌ Error fetching group by slug:", err);
    res.status(500).json({ error: "Failed to fetch group" });
  }
}

// 🆕 POST create group
async function createGroup(req, res) {
  try {
    const db = getDB();
    const newGroup = req.body;

    // ✅ Basic validation
    if (!newGroup || !newGroup.name) {
      return res.status(400).json({ error: "Group name is required" });
    }

    const result = await db.collection("groups").insertOne(newGroup);
    res.status(201).json({ _id: result.insertedId, ...newGroup });
  } catch (err) {
    console.error("❌ Error creating group:", err);
    res.status(500).json({ error: "Failed to create group" });
  }
}

// ✏️ PUT update group
async function updateGroup(req, res) {
  try {
    const db = getDB();
    const updated = await db.collection("groups").findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body },
      { returnDocument: "after" }
    );
    if (!updated.value) return res.status(404).json({ error: "Group not found" });
    res.status(200).json(updated.value);
  } catch (err) {
    console.error("❌ Error updating group:", err);
    res.status(500).json({ error: "Failed to update group" });
  }
}

// 🗑️ DELETE group
async function deleteGroup(req, res) {
  try {
    const db = getDB();
    const result = await db.collection("groups").deleteOne({
      _id: new ObjectId(req.params.id),
    });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Group not found" });
    }
    res.status(200).json({ message: "Group deleted" });
  } catch (err) {
    console.error("❌ Error deleting group:", err);
    res.status(500).json({ error: "Failed to delete group" });
  }
}

module.exports = {
  getAllGroups,
  getGroupById,
  getGroupBySlug,
  createGroup,
  updateGroup,
  deleteGroup,
};