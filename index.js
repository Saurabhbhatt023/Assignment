const express = require("express")

const app = express()


app.post("/todo" , (req , res) => {

    res.send("Hello")

     
})

app.get("/todos" , (req , res) => {

    res.send("Hello")

     
})
app.put("/todos" , (req , res) => {

    res.send("Hello")

     
})




app.listen(3002)