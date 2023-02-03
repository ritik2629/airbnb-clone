import { userSchema } from "../mongodb/models/user.js";
import bcrypt from "bcrypt";
import express from "express";

const router = express.Router();

const bcryptSalt = bcrypt.genSaltSync(10);

router.route("/").post(async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await userSchema.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(user);
  } catch (err){
    res.status(422).json(err)
  }
});

export default router;
