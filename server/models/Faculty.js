const mongoose = require('mongoose');


const FacultySchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true ,
    },
    FullName:{
        type:String,
        required:true,
    },
    email:
    {
        type:String,
        required:true,
        unique:true,
    },
    Phone:{
        type:String,
        required:true,
    },
    OfficeHours:{
        type:Array,
        required:true,
    },
    OfficeLocation:{
        type:String,
        required:true,
    },
    ResearchInterests:{
        type:Array,
        required:true,
    },
    SelectedPublications:{
        type:Array,
        required:true,

    },
    Description:{
        type:String,
        required:true,
    }
 
});

const Faculty = mongoose.model('Faculty',FacultySchema);
module.exports=Faculty;

