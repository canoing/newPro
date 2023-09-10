const {Schema, model } = require("mongoose")
const  notas  = new  Schema ({
 title: {
    
    type : String,
    require: true
} ,
 description: {
    type : String,
    require: true
    
 }
 



},{timestamps:true})

module.exports = model("nota",notas)