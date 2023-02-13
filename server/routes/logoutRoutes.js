import express from 'express'

const router=express.Router()

router.route('/').post((req,res)=>{
    res.json('hello from logout')
})

export default router