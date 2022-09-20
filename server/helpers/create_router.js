const express = require("express")
const ObjectId = require("mongodb").ObjectId

const createRouter = function(collection){

    const router = express.Router()

    router.get("/show", (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs)=> res.json(docs))
    })
    
    router.put("/add", (req, res) => {
        collection
        .insertOne(req.body)
        collection
        .find()
        .toArray()
        .then((docs)=> res.json(docs))
    })
    
    router.post("/modify/:id", (req, res)=>{
        collection
        .updateOne({_id:ObjectId(req.params.id)}, {$set: req.body})
        // .then((result)=>{
            //     res.json(result)
            // })
            collection
            .find({_id: ObjectId(req.params.id)})
            .toArray()
            .then((docs) => res.json(docs))
        })
        
        router.delete("/delete/:id", (req, res) => {
            console.log("reached here", "id is", ObjectId(req.params.id))
            collection
            .deleteOne({_id: ObjectId(req.params.id)})
            collection
            .find()
            .toArray()
            .then((docs)=> res.json(docs))

    })

    return router
}

module.exports = createRouter