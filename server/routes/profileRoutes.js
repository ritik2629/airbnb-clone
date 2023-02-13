import express from "express";

const router=express.Router()

router.route('/').post(async(req,res)=>{
    res.json('hey')
})


export default router