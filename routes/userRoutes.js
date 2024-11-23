const express = require("express");
const router = express.Router();
const { authGuard } = require("../middleware/authMiddleware");

const {
  registerUser,
  login,
  getAllUsers,
  getUser,
  updateUser,
} = require("../controllers/userControllers.js");
const { uploadPicture } = require("../middleware/uploadPictureMiddleware.js");

router.post("/register", registerUser);
router.post("/login", login);
router.get("/getAllUsers", authGuard, getAllUsers);
router.get("/getUser", authGuard, getUser);

router.put("/updateUser", uploadPicture.single("userAvatar"), updateUser);
module.exports = router;
