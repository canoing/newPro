const usectrl = {}

usectrl.renderegistro = (req , res) => {
    res.render("user/signup")

}
 usectrl.datos = (req, res) => {
   console.log(req.body)
    res.send("si")
 }
 usectrl.rendeentrada= (req , res) => {
    res.render("user/signin")

}
 usectrl.entra = (req , res) =>{

    res.send("ya esta")
 }
 usectrl.salir = (req , res) => {
    res.send("salir")
 }
module.exports = usectrl