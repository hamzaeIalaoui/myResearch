require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const StudentModel=require('./models/Students')


app.use(express.json())

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true })

//
app.post('/addStudent', authenticateToken, async (req, res) => {
   const student = new StudentModel({
      id: req.body.id,
      name: req.body.name,
      classification: req.body.classification,
      school: req.body.school
    })
    try{
        const result = await student.save()
        res.send(result)
    }
    catch(err){
      
        res.send(err)

    }

        
})

app.post('/deleteStudent', authenticateToken, async (req, res) => {
    try{
        const result = await StudentModel.deleteOne({id:req.body.id})
        if(result.deletedCount==0){
            res.send("Student not found")
        }
        else{
            res.send("Student deleted")
        }

    }
    catch(err){
      res.send(err)
    }

})

app.post('/editStudent', authenticateToken, async (req, res) => {
    try{
        const result = await StudentModel.updateOne({id:req.body.id},{$set:{name:req.body.name,classification:req.body.classification,school:req.body.school}})
        if(result.nModified==0){
            res.send("Student not found")
        }
        else{
            res.send("Student updated")
        }

    }
    catch(err){
      res.send(err)
    }

  })

app.get('/getStudents', authenticateToken, async (req, res) => {
    try{
        const result = await StudentModel.find()
        res.send(result)
    }
    catch(err){
      res.send(err)
    }

  })

app.get('/getStudentById', authenticateToken, async (req, res) => {
    try{
        const result = await StudentModel.find({id:req.query.id})
        res.send(result)
    }
    catch(err){
      res.send(err)
    }

  })



app.get('/test', authenticateToken, (req, res) => {
    res.status(200).json({
        message: 'Authenticated'
    })
})





function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

//running the server
app.listen(3001,()=>{
    console.log('server is running on port 3001');
}
);
