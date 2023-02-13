import bcrypt from 'bcrypt';
import express from 'express';
import { userSchema } from "../mongodb/models/user.js";
import jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";

const router =express.Router()

dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY;

router.route('/').post(async(req,res)=>{
    const {email,password}=req.body
    const user=await userSchema.findOne({email})
    if(user){
        const paswOk=bcrypt.compareSync(password,user.password)
        if(paswOk){
            jwt.sign({email:user.email,id:user._id},secretKey,{},(err,token)=>{
                if(err) throw err;
                res.cookie('token',token).json(user)
                // res.cookie('token',token).json('password match')
            })
        }else{
            res.status(422).json('password incorrect')
        }
        // res.json('user already exist')
    }else{
        res.json("user doesn't exist")
    }
})

export default router