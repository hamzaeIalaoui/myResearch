require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const studentRoutes = require('./routes/student-routes')
const facultyRoutes = require('./routes/faculty-routes')
const projectRoutes = require('./routes/project-routes')



app.use(express.json())


mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true })


app.use('/api/student', authenticateToken, studentRoutes.routes)
app.use('/api/faculty', authenticateToken, facultyRoutes.routes)
app.use('/api/project', authenticateToken, projectRoutes.routes)


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
