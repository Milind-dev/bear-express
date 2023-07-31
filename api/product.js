const { error } = require("console");
const express = require("express");
const router = express.Router();

router.get("/",async (req,res)=>{
    try{
        res.json({
            status:200,
            message:"get data successfully"
        })
    }catch(err){
        console.error(error)
        return res.status(500).send("sender error")
    }
})
module.exports = router;