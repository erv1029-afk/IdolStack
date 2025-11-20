const express = require("express");
const router = express.Router();

// 🎯 Controller functions
const {
  getAllGroups,
  getGroupById,
  getGroupBySlug,
  createGroup,
  updateGroup,
  deleteGroup,
} = require("../controllers/groupController");

// 📦 GET all groups
router.get("/", getAllGroups);

// 🔗 GET one group by slug (e.g. /groups/slug/bts)
router.get("/slug/:slug", getGroupBySlug);

// 🔍 GET one group by MongoDB ID
router.get("/id/:id", getGroupById);

// 🆕 Create a new group
router.post("/", createGroup);

// ✏️ Update group by ID
router.put("/:id", updateGroup);

// 🗑️ Delete group by ID
router.delete("/:id", deleteGroup);

module.exports = router;
