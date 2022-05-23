const mongoose = require('mongoose');





const StudentSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true ,
        
      },
      name:{
        type:String,
        required:true,

      },
      classification:{
        type:String,
        required:true,
      },
      school:{
        type:String,
        required:true,
      },
 

});


const Student = mongoose.model('Students',StudentSchema);
module.exports=Student;
