require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bycrypt = require('bcrypt')
const {MongoClient} = require('mongodb')

app.use(express.json())
//cors 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}
);
//refresh token for now are stored locally, in the future they will be stored in the database
let refreshTokens = []


const client= new MongoClient(process.env.MONGODB_URI)
client.connect(err => {
  if (err) {
    console.log(err)
  }
  console.log('Connected to database')
}
)


app.post('/token', (req, res) => {
  const refreshToken = req.body.token
  if (refreshToken == null) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: user.name })
    res.json({ accessToken: accessToken })
  })
})

app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

app.post('/login', async (req, res) => {
  const email = req.body.email
  const password= req.body.password
  const user = { name: email}
  try{
    const result=await client.db("myResearch").collection("admin").findOne({email:email})

    if(result==null){
      res.sendStatus(401).json({error:'Invalid email or password'})
    }
    else{
      if(await bycrypt.compare(password,result.password)){
        const accessToken = generateAccessToken(user)
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
  refreshTokens.push(refreshToken)
  res.json({ accessToken: accessToken, refreshToken: refreshToken })
      }
      else{
        res.sendStatus(401).json({error:'Invalid email or password'})
      }
      
    }

  }
  catch(err){
    console.log(err)
  }
   

  
})

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3600s' })
}

app.listen(4000)