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

// 📥 GET all groups
router.get("/", getAllGroups);

// 🔗 GET one group by slug (for frontend routing like /group/bts)
router.get("/slug/:slug", getGroupBySlug);

// 🔍 GET one group by ID
router.get("/id/:id", getGroupById);


// 🆕 POST new group
router.post("/", createGroup);

// ✏️ PUT update group by ID
router.put("/:id", updateGroup);

// 🗑️ DELETE group by ID
router.delete("/:id", deleteGroup);

module.exports = router;