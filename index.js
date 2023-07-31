
const express = require("express");
const app = express();
const product = require("./api/product")
const port = process.env.port || 5000;

app.use('/api/product',product)
app.listen(port,()=>{
    console.log(` server port = ${port}`)
})