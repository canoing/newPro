const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
}, { timestamps: true });

userSchema.methods.encrypPassword = async function (contraseña) {
  const salt = await bcrypt.genSalt(15);
  return await bcrypt.hash(contraseña, salt);
};

userSchema.methods.matchpassword = function (contraseña) {
  return bcrypt.compare(contraseña, this.contraseña);
};

module.exports = model("User", userSchema);
