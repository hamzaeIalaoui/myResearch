const mongoose = require('mongoose');





const StudentsSchema = new mongoose.Schema({
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


const Students = mongoose.model('Students',StudentsSchema);
module.exports=Students;
