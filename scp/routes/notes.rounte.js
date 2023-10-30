const { Router } = require("express")
const router = Router()
const {isAuthenticate} = require("../helpers/auth.js")
const { 
    remderformula ,
    crearnota ,
    remdennotas ,
     edit,
    actu,
    deletenota
} = require("../controllers/nodes.control.js")
// publicacion nuevas
router.get("/notes/add" , isAuthenticate , remderformula )
router.post("/notes/nota-nueva" ,  isAuthenticate , crearnota)
// nota echas
router.get("/notes"  , remdennotas)
// editar
router.get("/notes/edit/:id" ,  isAuthenticate ,edit )
router.put("/notes/edit/:id" ,  isAuthenticate ,actu )
// borra
router.delete("/notes/delete/:id" , isAuthenticate , deletenota)


module.exports = router
