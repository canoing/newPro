
const {Schema, model } = require("mongoose")

const  notas  = new  Schema ({
 title: {
    
    type : String,
    require: true
} ,
 description: {
    type : String,
    require: true
    
 },
 user: {
   type : String,
   require: true
   
 }


 



},{timestamps:true})

module.exports = model("note",notas)