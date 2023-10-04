const notesctrl = {}

const note = require("../models/nota")

notesctrl.remderformula = (req , res) => {
    res.render("notas/nota-nueva.hbs")
 
}
notesctrl.crearnota = async (req, res) => {
    const { title , description} = req.body
   const notanew =  new note({ title,  description} )
  await notanew.save()

    res.send("nota new")


}
notesctrl.remdennotas = (req , res)=> {
    res.send("en efecto nadie usa esto 🪨")
}
notesctrl.edit = (req, res) => {

    res.send("se va a editar")


}
notesctrl.actu = (req, res) => {

    res.send("se actualizo")


}
notesctrl.deletenota = (req, res) => {

    res.send("no veo nada, no esta haciendo nada ")


}

module.exports = notesctrl