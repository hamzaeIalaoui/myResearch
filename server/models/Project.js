const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,

    },
    Description:{
        type:String,
        required:true,
    },
    Supervisors:{
        type:Array,
        required:true,
    },
    members:{
        type:Array,
        required:true,
    },

});

const Project = mongoose.model('Project',ProjectSchema);
module.exports=Project;
