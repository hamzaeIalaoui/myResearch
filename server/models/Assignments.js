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
const collection = db.collection('assignments')

const assignmentSchema = {
    id_microsoft: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    assignmentTitle: {
        type: String,
        required: true,
    },
    assignmentDetail: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }


}
module.exports = {
    assignmentSchema,
    collection
}
