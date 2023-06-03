import express from "express";
// const router = express.Router(); // Not needed
import { getUser } from "../controllers/general.js";

const router = express.Router(); // set the router variable to a new instance of the express router, this was not included.

router.get("/user/:id", getUser);
// router.get("/dashboard", getDashboardStats);




export default router;