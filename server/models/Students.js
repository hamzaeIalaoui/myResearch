const mongoose = require('mongoose');





const StudentsSchema = new mongoose.Schema({
    id:{
        type:integer,
        required:true,
        unique:true ,
        
      },
      name:{
        type:String,
        required:true,

      },
      classfication:{
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
