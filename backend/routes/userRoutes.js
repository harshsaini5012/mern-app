// // import express from "express";
// // import { getUsers, createUser } from "../controllers/userControler.js";

// // const router = express.Router();

// // router.get("/", getUsers);
// // router.post("/", createUser);

// // export default router;
// import express from "express";
// import {
//   getUsers,
//   createUser,
//   deleteUser,
//   updateUser,
// } from "../controllers/userControler.js";

// const router = express.Router();

// router.get("/", getUsers);
// router.post("/", createUser);
// router.delete("/:id", deleteUser);
// router.put("/:id", updateUser);

// export default router;

// import express from "express";
// import {
//   getUsers,
//   createUser,
//   deleteUser,
//   updateUser,
// } from "../controllers/userControler.js";
// import { protect, adminOnly } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.get("/", protect, adminOnly, getUsers);
// router.post("/", createUser);
// router.delete("/:id", protect, adminOnly, deleteUser);
// router.put("/:id", protect, updateUser);

// export default router;

// import express from "express";
// import {
//   getUsers,
//   createUser,
//   deleteUser,
//   updateUser,
//   changePassword,
// } from "../controllers/userControler.js";
// import { protect, adminOnly } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.get("/", protect, adminOnly, getUsers);
// router.post("/", createUser);
// router.delete("/:id", protect, adminOnly, deleteUser);
// router.put("/:id", protect, updateUser);
// router.put("/:id/change-password", protect, changePassword);

// export default router;

// import express from "express";
// import {
//   getUsers,
//   createUser,
//   deleteUser,
//   updateUser,
//   changePassword,
// } from "../controllers/userControler.js";
// import { protect, adminOnly } from "../middleware/authMiddleware.js";
// import { upload } from "../config/cloudinary.js";
// import User from "../models/User.js";

// const router = express.Router();

// router.get("/", protect, adminOnly, getUsers);
// router.post("/", createUser);
// router.delete("/:id", protect, adminOnly, deleteUser);
// router.put("/:id", protect, updateUser);
// router.put("/:id/change-password", protect, changePassword);

// // Upload profile photo
// router.put(
//   "/:id/upload-photo",
//   protect,
//   upload.single("photo"),
//   async (req, res) => {
//     try {
//       const user = await User.findByIdAndUpdate(
//         req.params.id,
//         { photo: req.file.path },
//         { new: true },
//       );
//       res.status(200).json({ photo: user.photo });
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   },
// );

// export default router;
import express from "express";
import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  changePassword,
} from "../controllers/userControler.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import { upload } from "../config/cloudinary.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/", protect, adminOnly, getUsers);
router.post("/", createUser);
router.delete("/:id", protect, adminOnly, deleteUser);
router.put("/:id", protect, updateUser);
router.put("/:id/change-password", protect, changePassword);

// Upload profile photo
router.put("/:id/upload-photo", upload.single("photo"), async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { photo: req.file.path },
      { new: true },
    );
    res.status(200).json({ photo: user.photo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
