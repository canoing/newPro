const notesctrl = {}

const note = require("../models/nota")

notesctrl.remderformula = (req , res) => {
    res.render("notas/nota-nueva.hbs")
 
}
notesctrl.crearnota = async (req, res) => {
 const { title , description} =   req.body
 const nuevanota =  new note({title , description})
  await nuevanota.save()
  req.flash("published" , "post published")


  
   
  res.redirect("/notes")


}
notesctrl.remdennotas = async   (req , res)=> {
    const notes = await note.find().lean()
    res.render("notas/todas-notas.hbs",{ notes})
}
notesctrl.edit = (req, res) => {

    res.send("se va a editar 'pendiente' " )


}
notesctrl.actu = (req, res) => {

    res.send("se  va a actualiza  'pendiente' ")


}
notesctrl.deletenota =  async (req, res) => {
   await  note.findByIdAndDelete(req.params.id) 
   req.flash("published"  , "post delete")

    res.redirect("/notes")


}


module.exports = notesctrl