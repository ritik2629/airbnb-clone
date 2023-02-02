import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { connectDB } from "./mongodb/connect.js";
import { userSchema } from "./mongodb/models/user.js";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
dotenv.config();

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(cors());

app.get("/test", async (req, res) => {
  res.json({ message: "hello" });
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userSchema.create({
    name,
    email,
    password: bcrypt.hashSync(password, bcryptSalt),
  });
  //   res.json({name,email,password})
  res.json(user);
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("server is running on port http://localhost:8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
