const { Router } = require("express")
const router = Router()
const { 
     renderegistro, 
    datos,
    rendeentrada,
    entra,
    salir
  } = require("../controllers/user.contro")
router.get("/user/signup", renderegistro)
router.post("/user/signup" , datos)
router.get("/user/signin", rendeentrada)
router.post("/user/signin", entra)
router.get("/user/logout", salir)


module.exports =  router