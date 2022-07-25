
'use strict';
const {MongoClient} = require('mongodb')
const UserSchem=require('../models/User')


const client= new MongoClient(process.env.MONGODB_URI)
client.connect(err => {
    if (err) {
        console.log(err)
    }
    console.log('Connected to database')
    }
)


exports.getAllUsers = (req, res) => {
    const collection = client.db('myResearch').collection('users')
    collection.find({}).toArray((err, docs) => {
        if (err) {
            console.log(err)
        }
        res.send(docs)
    })
}
