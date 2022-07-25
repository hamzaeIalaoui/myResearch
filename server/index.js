require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const {MongoClient} = require('mongodb')
const userRoutes = require('./routes/users-routes')


app.use(express.json())
const client= new MongoClient(process.env.MONGODB_URI)
client.connect(err => {
  if (err) {
    console.log(err)
  }
  console.log('Connected to database')
}
)

app.get('/test', authenticateToken, (req, res) => {
    res.status(200).json({
        message: 'Authenticated'
    })
})
app.use('/api/users', authenticateToken, userRoutes.routes)








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

  app.listen(3001,()=>{
    console.log('server is running on port 3001');
}
);
  