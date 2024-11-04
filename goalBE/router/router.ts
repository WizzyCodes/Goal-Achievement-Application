import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getOneUser,
  loginUser,
} from "../controller/userController";
import {
  createGoal,
  getAllGoals,
  updateOneGoalStatus,
} from "../controller/goalController";

const router: any = Router();

router.route("/get-one-user/:userID").get(getOneUser);
router.route("/get-all-users").get(getAllUsers);

router.route("/register-user").post(createUser);
router.route("/login-user").post(loginUser);

// goal endpoints

router.route("/update-goal-status/:goalID").patch(updateOneGoalStatus);
router.route("/create-goal").post(createGoal);
router.route("/get-all-goal").get(getAllGoals);

export default router;
