import express from "express";
const router = express.Router();

router.post("/register", (req, res) => {
  res.send("register.auth - register an user");
});

export default router;
