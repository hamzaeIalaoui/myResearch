'use strict';
const {MongoClient} = require('mongodb')
const AssignmentSchem=require('../models/Assignments')


const client= new MongoClient(process.env.MONGODB_URI)
client.connect(err => {
    if (err) {
        console.log(err)
    }
    console.log('Connected to database')
    }
)


exports.getAssignments = (req, res) => {
    const id=req.body.id
    const collection = client.db('myResearch').collection('assignments')
    collection.find({id_microsoft:id}).toArray((err, docs) => {
        if (err) {
            console.log(err)
        }
        res.send(docs)
    }
    )
}
