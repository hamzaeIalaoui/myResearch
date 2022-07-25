const {
    MongoClient
} = require('mongodb')
const client = new MongoClient(process.env.MONGODB_URI)
client.connect(err => {
    if (err) {
        console.log(err)
    }
    console.log('Connected to database')
})
const db = client.db('myResearch')
const collection = db.collection('users')

const userSchema = {
    id: {
        type: String,
        required: true,
        unique: true
    },

    id_microsoft: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    },
}

module.exports = {
    userSchema,
    collection
}