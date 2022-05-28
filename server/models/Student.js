const mongoose = require('mongoose');





const StudentSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true ,
        
      },
      FullName:{
        type:String,
        required:true,

      },
      email:{
        type:String,
        required:true,
        unique:true,
      },
      ResearchInterests:{
        type:Array,
        required:true,
      },
      experience:{
        type:Array,
        required:true,
      },
      publications:{
        type:Array,
        required:true,
      },
      CV:{
       type:Array,
        required:false,
      }
});


const Student = mongoose.model('Students',StudentSchema);
module.exports=Student;
