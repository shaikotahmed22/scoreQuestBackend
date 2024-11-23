const express = require("express");

const router = express.Router();
const { authGuard } = require("../middleware/authMiddleware");

const {
  addSquad,
  getSquad,
  deleteSquad,
  getSquadBySquadId,
} = require("../controllers/squadController.js");

router.post("/addSquad", authGuard, addSquad);

router.get("/getSquad", authGuard, getSquad);

router.delete("/deleteSquad", authGuard, deleteSquad);

router.get("/getSquadById", authGuard, getSquadBySquadId);
module.exports = router;
