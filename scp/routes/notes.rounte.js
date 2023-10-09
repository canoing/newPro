const { Router } = require("express")
const router = Router()

const { 
    remderformula ,
    crearnota ,
    remdennotas ,
     edit,
    actu,
    deletenota
} = require("../controllers/nodes.control.js")
// publicacion nuevas
router.get("/notes/add" , remderformula )
router.post("/notes/nota-nueva" , crearnota)
// nota echas
router.get("/notes" ,  remdennotas)
// editar
router.get("/notes/edit/:id" , edit )
router.put("/notes/edit/:id" , actu )
// borra
router.delete("/notes/delete/:id" , deletenota)


module.exports = router