
'use strict';
const {MongoClient} = require('mongodb')
const UserSchem=require('../models/User')
const jwt = require('jsonwebtoken')


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

exports.signInOutlook = (req, res) => {
    const collection = client.db('myResearch').collection('users')
    const accessToken = req.body.accessToken
    //check token authenticity
    const url = 'https://graph.microsoft.com/v1.0/me/?$select=department,officeLocation,displayName,email,jobTitle,id'
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
        }
    }
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            //create a jwt token
            console.log(data)
            if(data.error){
                res.send(data.error)
            }
            const token = jwt.sign({
                name: data.displayName,
                email: data.email,
                id: data.id,
                department: data.department,
                jobTitle: data.jobTitle,
                officeLocation: data.officeLocation,
            }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })

            res.send(token)
            
        }
        )

  
}
exports.checkValidToken = (req, res) => {
    const token = req.body.token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            res.sendStatus(403)
        }
        res.send(user)
    }
    )
}

