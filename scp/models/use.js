const { Schema, model } = require("mongoose")
const bcr = require("bcryptjs")
const user = new Schema({
   name: {

      type: String,
      require: true
   },
   email: {
      type: String,
      require: true

   },
   contraseña: {
      type: String,
      require: true

   },




}, { timestamps: true })
user.methods.encrypPassword = async contraseña => {
   const salt = await bcr.genSalt(15)
   return await bcr.hash(contraseña, salt)


}
user.methods.matchpassword = function (contraseña) {
   return bcrypt.compare(contraseña, thi.contraseña)

}


module.exports = model("use", user)