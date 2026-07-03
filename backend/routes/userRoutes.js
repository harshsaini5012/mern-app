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

import express from "express";
import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/userControler.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, adminOnly, getUsers);
router.post("/", createUser);
router.delete("/:id", protect, adminOnly, deleteUser);
router.put("/:id", protect, updateUser);

export default router;
