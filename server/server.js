const express = require("express")
const app = express()
const MongoClient = require("mongodb").MongoClient
const cors = require("cors")
const createRouter = require("./helpers/create_router.js")


app.use(express.json())
app.use(cors())

MongoClient.connect("mongodb://localhost:27017", {useUnifiedTopology: true})
.then((client)=>{
    const db = client.db("exploration")
    const userCollection = db.collection("users")
    const userRouter = createRouter(userCollection)
    app.use("/", userRouter)
})

app.listen(9000, function(){
    console.log("Server runing")
})