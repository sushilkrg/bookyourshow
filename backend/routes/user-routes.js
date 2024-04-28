import express from "express";
import {
  getAllUsers,
  getUserById,
  signup,
  login,
  updateUser,
  deleteUser,
  getBookingsofUser,
} from "../controllers/user-controllers.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.get("/bookings/:id", getBookingsofUser);
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
