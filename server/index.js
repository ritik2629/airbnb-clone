import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { connectDB } from "./mongodb/connect.js";
import userRoutes from './routes/userRoutes.js';
import loginRoutes from './routes/loginRoutes.js';

const app = express();
app.use(cors());

app.use(express.json());
dotenv.config();

app.use('/register',userRoutes)
app.use('/login',loginRoutes)

app.get("/test", async (req, res) => {
  res.json({ message: "hello" });
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
