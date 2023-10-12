const usectrl = {}
const passport =  require("passport")
const user = require("../models/use")

usectrl.renderegistro = (req , res) => {
    res.render("user/signup")

}
 usectrl.datos = async  (req, res) => {
   const errors = []
    const { name , email , password , password_confir} = req.body
    if (password  != password_confir){
      errors.push({ Text: "passwords do not match"})
    }
   if (password.length  < 4) {
      errors.push({Text: "passwords must be at least 4 characters"})
   }
   if (errors.length > 0){
   res.render("user/signup" , {
      errors,
      name,
      email,
      password 


   })
   } else{
     const mailuser = await  user.findOne({ email: email})
     if (mailuser){
      req.flash("error", "the mail is already in use")
     
      res.redirect("/user/signup")
     } else {
     const newUser =  new user({name, email, password})
     newUser.password = await newUser.encrypPassword(password)
     await newUser.save()
     req.flash("error" , "you are registered")
     res.redirect("/user/signin")
     }
   }
 }
 usectrl.rendeentrada= (req , res) => {
    res.render("user/signin")

}
 usectrl.entra = passport.authenticate("local", {
 failureRedirect: "/user/signin",
 successRedirect: "/notes",
 failureFlash: true
 
 })
 usectrl.salir = (req , res) => {
   req.session.user = null
   req.flash("published", "you are logge out now")
   res.redirect("/user/signin")
 }
module.exports = usectrl